export default function CountryInfo({ country, subRegion, nativeName }) {
  let countryPopulation = country.population
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  console.log(subRegion, nativeName)
  return (
    <div className="country-info">
      {nativeName && (
        <p className="country-region">
          <span className="title">Native Name:</span> {nativeName}
        </p>
      ) }
      <h2 className="country-name"> {country.name.common}</h2>
      <p className="country-population">
        <span className="title">Population:</span> {countryPopulation}
      </p>
      <p className="country-region">
        <span className="title">Region:</span> {country.region}
      </p>
      {subRegion && (
        <p className="country-region">
          <span className="title">SubRegion:</span> {subRegion}
        </p>
      ) }
      <p className="country-capital">
        <span className="title">Capital:</span> {country.capital}
      </p>
    </div>
  )
}
