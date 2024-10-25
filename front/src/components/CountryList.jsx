import React from "react";


export default function CountryList({countries}) {
    return (
        <ListGroup className='col-md-6 m-auto'>
                {countries.map(country => (
                    <ListGroupItem key={country.countryCode} onClick={() => handlerClickOnCountry(country.countryCode)} className='hoverable'>{country.name}</ListGroupItem>
                ))}
        </ListGroup>
    )
}