import { useState, useEffect } from "react"
import axios from 'axios'
import './App.css'

function Header () {
  return (
    <header className="header">
      <HeaderTitle title="Where in the World?"/>
      <Button/>
    </header>
  )
}

function HeaderTitle ({ title }) {
  return (
    <h1 className="header__title">
        { title }
    </h1>
  )
}

function Button () {
  return (
    <button className="toggle-theme" role="switch" aria-label="light/dark mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon toggle-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <span className="toggle-theme-text">Dark Mode</span>
    </button>
  )
}

function Nav () {
  return (
    <nav className="navigation">
      <SearchBar
        name="Search for a country"
        id="country-search"
        placeholder="Search for a country..."
      />

      <label htmlFor="countries-filter" id="country-filter">Filter by Country</label>
      <div className="select-parent">
        <select name="countries" id="countries-filter"> 
          <option value="">Filter by Region </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        </div>
    </nav>
  )
}

function SearchBar ({ name, id, placeholder }) {
  return (
    <div className="search-parent">
        <input type="search" name={name} id={id} placeholder={placeholder} />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </div>
  )
}

const countries = [
  {
    name: "United States",
    region: "America",
    capital: "Washington",
    img: "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
  }
]

function CountryList ({ countries }) {
  return (
    <main>
      <ul className="country-card-list">
        {countries.map(country => (
          <li key={country.area}>
            <CountryCard country={country}/>
          </li>
        ))}
      </ul>
      
    </main>
  )
}

function CountryCard ( { country } ) {
  return (
    <div className="country-card">
      <CountryImage img={country.flags} />
      <CountryInfo country={country}/>
    </div>
  )
}

function CountryImage ({ img }) {
  return (
    <img src={ img.svg } alt="a flag of a country" className="country-card-image" />
  )
}


function CountryInfo ({ country }) {
  let countryPopulation = country.population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  
  return (
    <div className="country-info">
      <h2 className="country-name"> { country.name.common }</h2>
      <p className="country-population"><b>Population:</b> { countryPopulation }</p>
      <p className="country-region"><b>Region:</b> { country.region }</p>
      <p className="country-capital"><b>Capital:</b> { country.capital }</p>
    </div>
  )
}

function App () {
  const [countries, setCountries] = useState([])
  let isActive = true;

  useEffect(() => {
    async function getCountries () {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        const data = response.data
        //get the first six object
        const firstSixCountries = data.slice(0,6)
        setCountries(firstSixCountries)
      } catch (error) {
        console.error("An Error occured:",error)
        }
    }


    if (isActive) {
      getCountries();
    }

    () => isActive = false;
    }, [])

  return (
    <div className="App">
      <Header />
      <Nav />
      <CountryList countries={countries}/>
    </div>
  )
}

export default App
