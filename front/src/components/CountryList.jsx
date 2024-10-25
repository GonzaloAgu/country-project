import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CountryList({countries}) {

    const handlerClickOnCountry = (code) => {
        window.location.href = `/country/${code}`;
    }

    return (
        <ListGroup className='col-md-6 m-auto'>
                {countries.map(country => (
                    <ListGroupItem key={country.countryCode} onClick={() => handlerClickOnCountry(country.countryCode)} className='hoverable'>{country.name || country.commonName}</ListGroupItem>
                ))}
        </ListGroup>
    )
}