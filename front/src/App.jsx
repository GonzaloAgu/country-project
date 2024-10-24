import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Header from './components/Header.jsx'
import CountryItem from './components/CountryItem.jsx';

function App() {
  const [countries, setCountries] = useState([])

  const API_COUNTRIES_LIST_URL = import.meta.env.VITE_API_BASE_URL + ":" + import.meta.env.VITE_API_PORT + "/countries"

  useEffect(()=>{
    fetch(API_COUNTRIES_LIST_URL)
      .then(res => res.json())
      .then(list => {
        setCountries(list);
      })
      .catch(error => {
        setCountries([{countryCode: "ERROR", name: "There was an error fetching from the server" + error}])
      })
  }, [])

  const handlerClickOnCountry = (event) => {
    console.log("click")
  }

  return (
    <>
    <Header className="mb-5" title="Welcome to my Country Project"/>
    <ListGroup className='col-md-6 m-auto'>
      {countries.map(country => (
        <ListGroupItem key={country.countryCode} onClick={handlerClickOnCountry} className=' hoverable'>{country.name}</ListGroupItem>
        //<CountryItem country={country} key={country.countryCode}></CountryItem>
      ))}
    </ListGroup>
    </>
  )
}

export default App
