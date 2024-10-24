import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Image } from "react-bootstrap";

export default function CountryView() {

    const [country, setCountry] = useState(null)
    const { countryCode } = useParams();

    const API_COUNTRY_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/country/" + countryCode;

    useEffect(() => {
        fetch(API_COUNTRY_URL)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
            .then(() => {
            })
            .catch(err => console.error(err))
    }, [])

    return country ? (
        <>
            <Image src={country.flag}></Image>
            <div>
                <h1>
                    {country.commonName}
                </h1>
            </div>
            <div>Work in progress...</div>
        </>
    ) : null;
}