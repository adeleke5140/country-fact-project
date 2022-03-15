export default function CountryInfo({ country, subRegion, nativeName }) {
  let countryPopulation = country.population
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  return (
    <div className="country-info">
      <h2 className="country-name"> {country.name.common}</h2>
      <p className="country-population">
        <span className="title">Population:</span> {countryPopulation}
      </p>
      <p className="country-region">
        <span className="title">Region:</span> {country.region}
      </p>
      <p className="country-capital">
        <span className="title">Capital:</span> {country.capital}
      </p>
    </div>
  )
}
