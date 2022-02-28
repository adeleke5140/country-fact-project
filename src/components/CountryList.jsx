import { useState } from 'react'

function CountryList({ countries, filteredCountry, input }) {
  const firstSixCountries = countries.slice(0, 6)
  return (
    <main>
      <ul className="country-card-list">
        {input.length > 1
          ? filteredCountry.map((country) => (
             <li key={country.area + '/' + country.name.common}>
               <CountryCard country={country} />
             </li>
          ))
          : firstSixCountries.map((country) => (
             <li key={country.area + '/' + country.name.common}>
                <CountryCard country={country} />
             </li>
            ))}
      </ul>
    </main>
  )
}

function CountryCard ({ country }) {
  return (
    <div className="country-card">
      <CountryImage img={country.flags} />
      <CountryInfo country={country} />
    </div>
  )
}

function CountryImage({ img }) {
  return (
    <img
      src={img.svg}
      alt="a flag of a country"
      className="country-card-image"
    />
  )
}

function CountryInfo({ country }) {
  let countryPopulation = country.population
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

  return (
    <div className="country-info">
      <h2 className="country-name"> {country.name.common}</h2>
      <p className="country-population">
        <b>Population:</b> {countryPopulation}
      </p>
      <p className="country-region">
        <b>Region:</b> {country.region}
      </p>
      <p className="country-capital">
        <b>Capital:</b> {country.capital}
      </p>
    </div>
  )
}

export default CountryList
