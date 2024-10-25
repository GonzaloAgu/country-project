import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Image, Alert, Spinner } from "react-bootstrap";
import CountryList from "../components/CountryList";
import PopulationChart from "../components/PopulationChart"

export default function CountryView() {

    const [country, setCountry] = useState(null)
    const { countryCode } = useParams();
    const [loading, setLoading] = useState(true)
    const [error404, setError404] = useState(false)

    const API_COUNTRY_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/country/" + countryCode;

    useEffect(() => {
        fetch(API_COUNTRY_URL)
            .then(res => res.json())
            .then(data => {
                if (data?.status === 404) {
                    setError404(true);
                    return;
                }
                setLoading(false);
                setCountry(data)
            })
            .catch(err => setError404(true))
    }, [])

    if (loading) {
        return <>
            <Header></Header>
            <Spinner animation="grow" />
        </>
    }

    if (error404)
        return (
            <Alert variant={"danger"}>The country with {countryCode} code couldn't be reached.</Alert>
        )


    return country ? (
        <>
            <Header></Header>
            <div className="pb-3">
                <Image src={country.flag} thumbnail width={200} className="mb-1"></Image>
                <h1>
                    {country.commonName}
                </h1>
                <h4>
                    {country.officialName}
                </h4>
            </div>
            <div className="py-3 mt-4">
                <h2>
                    Population over time
                </h2>
                <PopulationChart data={country.populationCounts}></PopulationChart>
            </div>
            <div className="py-3 mt-4">
                <h2 className="mb-4">
                    Bordering countries
                </h2>
                {country.borders.length === 0 ?
                    <p>This country has no borders!</p> :

                    <CountryList countries={country.borders}></CountryList>
                }
            </div>
        </>
    ) : null;
}