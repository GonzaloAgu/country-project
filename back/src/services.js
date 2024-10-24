export const obtainPopulationData = countryCode => {
    return fetch(process.env.API_POPULATION_DATA_URL)
        .then(res => res.json())
        .then(data => {
            const countryList = data.data;
            let selectedCountry = null;
            for(let i=0; i < countryList.length; i++){
                if(countryList[i].code === countryCode) {
                    selectedCountry = countryList[i];
                    break;
                }
            }
            return selectedCountry.populationCounts;
        })
        .catch(err => console.error("Couldn't find" + selectedCountry.country + " population. " + err))
}

export const obtainFlagURL = countryCode => {
    return fetch(process.env.API_FLAG_URL)
        .then(res => res.json())
        .then(data => {
            const countryList = data.data;
            let selectedCountry = null;
            for(let i=0; i < countryList.length; i++){
                if(countryList[i].iso3 === countryCode) {
                    selectedCountry = countryList[i];
                    break;
                }
            }
            return selectedCountry.flag;
        })
}

/**
 * Since the original API is inconsistent when using iso2 or iso3, I've had to create this service that converts from iso2 to iso3.
 * @param {*} iso2 
 */
export const obtainISO3CountryCode = iso2 => {
    return fetch(process.env.API_FLAG_URL)
        .then(res => res.json())
        .then(data => {
            const countryList = data.data;

            let selectedCountry = null;
            for(let i=0; i < countryList.length; i++){
                if(countryList[i].iso2 === iso2) {
                    selectedCountry = countryList[i];
                    break;
                }
            }
            if(selectedCountry === null)
                throw new Error("Not country found with the ISO2 code: " + iso2)
            return selectedCountry.iso3;
        })
}