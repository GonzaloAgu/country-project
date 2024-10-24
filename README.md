## Set up

1. Go to the back directory and install npm dependencies.

```
cd back
npm install
 ```

2. Create the .env file inside /back directory with the desired values. You can rename the `.env.template` file to `.env` and fill the values.

```
PORT=(port number)
API_COUNTRY_LIST_URL=(endpoint to /AvailableCountries)
API_COUNTRY_INFO_URL=(endpoint to /CountryInfo)
API_POPULATION_DATA_URL=(endpoint to /population)
API_FLAG_URL=(endpoint to flag/images)
```