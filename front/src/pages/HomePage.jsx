import React from "react";
import Header from "../components/Header";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function HomePage() {

    const [countries, setCountries] = useState([])
    const [clickedCountry, setClickedCountry] = useState(null)

    const API_COUNTRIES_LIST_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/countries"

    useEffect(() => {
        fetch(API_COUNTRIES_LIST_URL)
            .then(res => res.json())
            .then(list => {
                console.log(list)
                setCountries(list);
            })
            .catch(error => {
                setCountries([{ countryCode: "ERROR", name: "There was an error fetching from the server" + error }])
            })
    }, [])


    const handlerClickOnCountry = (code) => {
        window.location.href = `/country/${code}`;
    }

    return (
        <>
            <Header className="mb-5" title="Welcome to my Country Project" />
            <CountryList countries={countries}></CountryList>
        </>
    )
}