import React, { useEffect, useState } from "react"
import { ListGroupItem } from "react-bootstrap"

export default function CountryItem({country}){

    const API_COUNTRY_INFO_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/country/" + country.countryCode;

    const [countryInfo, setCountryInfo] = useState(null);
    const [loading, setLoading] = useState(true)

    

    useEffect(() =>{
        fetch(API_COUNTRY_INFO_URL)
            .then(res => res.json)
            .then(data => {
                setCountryInfo(data);
                setLoading(false)
            })
    }, [])

    return loading ? "Loading..." : (
        <ListGroupItem><img href={countryInfo.flag}></img>{country.name}</ListGroupItem>
    )
}
