import { obtainPopulationData, obtainFlagURL, obtainISO3CountryCode } from "./services.js";

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

export const getCountryInfo = async(req, res) => {

    let countryCode = req.params.countryCode.toUpperCase();

    console.log("looking for: ", countryCode)

    if(countryCode.length == 2){
        try {
            countryCode = await obtainISO3CountryCode(countryCode);
        } catch(e) {
            res.status(404).json( { message: e.message, countryCode , status: 404  } )
        }
    }


    const response = {};

    fetch(`${process.env.API_COUNTRY_INFO_URL}/${countryCode}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === 404) throw new Error("This country doesn't exist. Try using iso3 format (3 characters) for country codes!")
            return data;
        })
        .then(data => {
            response.borders = data.borders;
            response.commonName = data.commonName;
            response.officialName = data.officialName;
            response.region = data.region;

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