## Requisites
This project requires to be run on a NodeJS 18+ environment since it uses the native fetch API ("node-fetch" dependency is not included)

## Set up backend

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

Then do:

```
npm run dev
```

## Routes

#### Available countries

> /countries

This will return a list of the countries available.

#### Information of a country

> /country/countryCode

You can use both ISO2 or ISO3 country code format (two or three characters is fine). Country codes obtained from the /countries endpoint should work, and it's case insensitive.


## Set up frontend

First, install dependencies

```
cd front
npm install
```

Then, rename the .env.template file to .env and fill the fields.

To run in:

```
npm run dev
```
