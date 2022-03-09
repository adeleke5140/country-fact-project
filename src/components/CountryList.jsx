import { useState } from 'react'

function CountryList({
  countries,
  filteredCountry,
  filteredContinent,
  input,
  continent,
}) {
  console.log(filteredContinent)
  const firstEightCountries = countries.slice(15, -10)
  return (
    <main>
      <ul className="country-card-list">
        {input.length > 1
          ? filteredCountry.map((country) => (
              <li key={country.area + '/' + country.name.common}>
                <CountryCard country={country} />
              </li>
            ))
          : continent !== '' && continent.length > 1 
          ? filteredContinent.map((country) => (
              <li key={Math.random() + '/' + country.name}>
                <CountryCard country={country} />
              </li>
            ))
          : continent === '' && input.length < 1 ? firstEightCountries.map((country) => (
              <li key={country.area + '/' + country.name.common}>
                <CountryCard country={country} />
              </li>
          )) : null}
      </ul>
    </main>
  )
}

function CountryCard({ country }) {
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
