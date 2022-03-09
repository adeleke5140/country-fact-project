import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import CountryList from './components/CountryList'
import Loader from './components/Loader'
import useLocalStorage from 'use-local-storage'

function App() {
  const [countries, setCountries] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [input, setInput] = useState('')
  const [filteredCountry, setFilteredCountry] = useState([])
  const [continent, setContinent] = useState('')
  const [filteredContinent, setFilteredContinent] = useState([])

  let isActive = true

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        const data = response.data
        console.log(data)
        //get the first six object
        setCountries(data)
        setIsPending(false)
      } catch (error) {
        console.error('An Error occured:', error)
      }
    }

    if (isActive) {
      getCountries()
    }

    ;() => (isActive = false)
  }, [])

  //search API data
  function searchItems(searchValue) {
    setInput(searchValue)
    if (setInput !== '') {
      const filteredData = countries.filter((item) => {
        return Object.values(item.name.common)
          .join('')
          .toLowerCase()
          .includes(input.toLowerCase())
      })
      setFilteredCountry(filteredData)
    } else {
      setFilteredCountry(data)
    }
  }

  const getCountry = (selectedContinent) => {
    setContinent(selectedContinent)
  }

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (continent !== '') {
      const filteredCountryByContinent = countries.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(continent.toLowerCase())
      })
      setFilteredContinent(filteredCountryByContinent)
    } else {
      setFilteredContinent(countries)
    }
  }, [continent])

  //dark mode toggling for the app
  const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} switchTheme={switchTheme} />
      <Nav
        input={input}
        getInput={searchItems}
        continent={continent}
        getCountry={getCountry}
      />
      {isPending && <Loader />}
      {countries && (
        <CountryList
          countries={countries}
          filteredCountry={filteredCountry}
          filteredContinent={filteredContinent}
          input={input}
          continent={continent}
        />
      )}
    </div>
  )
}

export default App
