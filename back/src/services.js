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
        .catch(err => console.error("Couldn't find country's population. " + err))
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