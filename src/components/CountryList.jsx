import { Link, useNavigate } from 'react-router-dom'
import CountryImage from './CountryImage'
import CountryInfo from './CountryInfo'

function CountryList({
  countries,
  filteredCountry,
  filteredContinent,
  input,
  continent,
}) {
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
          : continent === '' && input.length < 1
          ? firstEightCountries.map((country) => (
              <li key={country.area + '/' + country.name.common}>
                <CountryCard country={country} />
              </li>
            ))
          : null}
      </ul>
    </main>
  )
}

function CountryCard({ country }) {
  const navigate = useNavigate()
  function showMoreInfo() {
    navigate('/cardInfo', { state: country })
  }
  return (
    <>
      <div className="country-card" onClick={showMoreInfo}>
        <CountryImage img={country.flags} />
        <CountryInfo country={country} />
      </div>
    </>
  )
}

export default CountryList
