import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Image } from "react-bootstrap";
import CountryList from "../components/CountryList";

export default function CountryView() {

    const [country, setCountry] = useState(null)
    const { countryCode } = useParams();
    const [error404, setError404] = useState(false)

    const API_COUNTRY_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/country/" + countryCode;

    useEffect(() => {
        console.log("AHH")
        fetch(API_COUNTRY_URL)
            .then(res => res.json())
            .then(data => {
                if(data?.status === 404) {
                    setError404(true);
                    return;
                }
                setCountry(data)
            })
            .catch(err => setError404(true))
    }, [])

    if(error404)
        return (
            <Alert variant={"danger"}>The country with {countryCode} code couldn't be reached.</Alert>
    )

    return country ? (
        <>
            <div>
                <Image src={country.flag} thumbnail width={200} className="mb-1"></Image>
                <h1>
                    {country.commonName}
                </h1>
                <h4>
                    {country.officialName}
                </h4>
            </div>
            <div className="mt-4">
                <h2>
                    Bordering countries
                </h2>
                <CountryList countries={country.borders}></CountryList>
            </div>
        </>
    ) : null;
}