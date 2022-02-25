import { useState, useEffect } from "react"
import axios from 'axios'
import './App.css'

function Header () {
  return (
    <header className="header">
      <h1 className="header__title">
        Where in the World?
      </h1>
      <button className="toggle-theme" role="switch" aria-label="light/dark mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon toggle-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <span className="toggle-theme-text">Dark Mode</span>
      </button>
    </header>
  )
}

function Nav () {
  return (
    <nav>
      <input type="search" name="Search for a country" id="country-search" placeholder="Search for a country..."/>
      <label htmlFor="countries-filter">Filter by Country</label>
      <select name="countries" id="countries-filter">
        <option value="#">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </nav>
  )
}

function CountryList () {
  return (
    <main>
      <CountryCard/>
    </main>
  )
}

function CountryCard () {
  return (
    <div>
      <CountryImage />
      <CountryInfo />
    </div>
  )
}

function CountryImage () {
  return (
    <img src="" alt="a flag of a country" />
  )
}


function CountryInfo () {
  return (
    <div className="country-info">
      <h2 className="country-name"></h2>
      <p className="country-population"></p>
      <p className="country-region"></p>
      <p className="country-capital"></p>
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
        console.log(data)
      } catch (error) {
        console.error(error)
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
      <CountryList/>
    </div>
  )
}

export default App
