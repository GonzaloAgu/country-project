import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function CountryView() {

    const [country, setCountry] = useState(null)

    const API_COUNTRY_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/country/AR"

    useEffect(() => {
        fetch(API_COUNTRY_URL)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
            .catch(err => console.error(err))
    })
    
    return country? (
    <>
        <div>{country.commonName}</div>
        <div>Work in progress...</div>
    </>
    ) : null;
}