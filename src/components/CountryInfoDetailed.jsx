import React from 'react'

export default function CountryInfoDetailed({ country, countries }) {
  let name = Object.values(country.name)
  let nativeName = name[2]
  nativeName
    ? (nativeName = Object.values(nativeName)[0].common)
    : 'no nativeName'

  let countryPopulation = country.population
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

  let currencies = country.currencies
    ? Object.values(country.currencies)
    : 'no currency'
  let currency = currencies[0].name

  const languages = []
  for (const lang in country.languages) {
    languages.push(country.languages[lang])
  }
  const formattedLanguges = languages.join(', ')

  //let's get the borders
  const borderAcronyms = country.borders ? [...country.borders] : 'no borders'
  const firstThreeAcr = borderAcronyms.slice(0, 3)

  function getCountryByAcronym(acronym) {
    let acronymList = []
    countries.filter((country) => {
      country.cca3 === acronym ? acronymList.push(country.name.common) : ''
    })
    return acronymList
  }

  let countryList = []
  for (let acr in firstThreeAcr) {
    let countries
    countries = getCountryByAcronym(firstThreeAcr[acr])
    countryList.push(countries)
  }
  return (
    <section className="sections-container">
      <section className="country-info-text">
        <div className="text-section-one">
          <h2>{country.name.common}</h2>
          <p>
            <span className="title">Native Name: </span>
            {nativeName}
          </p>
          <p className="country-population">
            <span className="title">Population:</span> {countryPopulation}
          </p>
          <p className="country-region">
            <span className="title">Region:</span> {country.region}
          </p>
          <p className="country-subRegion">
            <span className="title">Sub Region:</span> {country.subregion}
          </p>
          <p className="country-capital">
            <span className="title">Capital:</span> {country.capital}
          </p>
        </div>

        <div className="text-section-two">
          <p className="country-tld">
            <span className="title">Top Level Domain:</span> {country.tld}
          </p>
          <p className="country-currencies">
            <span className="title">Currencies: </span>
            {currency}
          </p>
          <p className="country-languages">
            <span className="title">Languages: </span>
            {formattedLanguges}
          </p>
        </div>
      </section>
      <section className="border-section">
        <div className="text-section-three">
          <p className="country-borderCountries">
            <span className="title">Border Countries: </span>
          </p>
          <ul className="border-list">
            {countryList.map((country) => (
              <li key={country.join('') + Math.random()}>{country.join('')}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}
