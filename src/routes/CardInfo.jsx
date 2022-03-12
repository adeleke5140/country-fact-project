import React from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import ReturnButton from '../components/ReturnButton'
import CountryDetails from '../components/CountryDetails'

export default function cardInfo({ theme }) {
  const location = useLocation()
  const country = location.state
  return (
    <div className="App">
      <div className="cardInfo">
        <ReturnButton buttonText="Back" theme={theme} />
        <CountryDetails country={country} />
      </div>
    </div>
  )
}
