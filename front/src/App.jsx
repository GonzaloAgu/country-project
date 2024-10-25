import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import HomePage from "./pages/HomePage.jsx"
import CountryView from './pages/CountryView.jsx';
import Header from './components/Header.jsx'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:countryCode" element={<CountryView />} />
    </Routes>
  )
}

export default App
