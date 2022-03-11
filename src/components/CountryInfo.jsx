export default function CountryInfo({ country }) {
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
