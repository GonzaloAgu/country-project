import { obtainPopulationData, obtainFlagURL } from "./services.js";

export const getCountryList = (req, res) => {
    
    fetch(process.env.API_COUNTRY_LIST_URL)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(er => {
            res.status(500).send("Something went wrong \n" + er);
        })
}

export const getCountryInfo = (req, res) => {
    const countryCode = req.params.countryCode;
    const response = {};

    fetch(`${process.env.API_COUNTRY_INFO_URL}/${countryCode}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === 404) throw new Error("This country doesn't exist")
            return data;
        })
        .then(data => {
            response.borders = data.borders;
            // look for population of the country
            return obtainPopulationData(countryCode);
        })
        .then(populationResponse => {
            response.populationCounts = populationResponse;
    
            // look for its flag URL
            return obtainFlagURL(countryCode);
        })
        .then(flagResponse => {
            response.flag = flagResponse;
            res.send(response);
        })
        .catch(error => {
            res.status(404).json( { message: error.message, countryCode , status: 404  } )
        })
}