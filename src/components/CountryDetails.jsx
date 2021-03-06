import React from 'react'
import CountryImage from '../components/CountryImage'
import CountryInfo from './CountryInfo'
import CountryInfoDetailed from './CountryInfoDetailed'

export default function CountryDetails({ country, countries }) {
  return (
    <div className="country-details">
      {' '}
      <CountryImage img={country.flags} />
      <CountryInfoDetailed country={country} countries={countries} />
    </div>
  )
}
