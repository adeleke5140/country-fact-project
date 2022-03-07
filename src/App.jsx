import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import CountryList from './components/CountryList'
import Loader from './components/Loader'
import useLocalStorage from "use-local-storage"

function App() {
  const [countries, setCountries] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [input, setInput] = useState('')
  const [filteredCountry, setFilteredCountry] = useState([])

  let isActive = true

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        const data = response.data
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
    console.log(searchValue)
    if (setInput !== '') {
      const filteredData = countries.filter((item) => {
        console.log(item);
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

  //dark mode toggling for the app
  const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? "dark" : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} switchTheme={switchTheme}/>
      <Nav input={input} getInput={searchItems} />
      {isPending && <Loader />}
      {countries && (
        <CountryList
          countries={countries}
          filteredCountry={filteredCountry}
          input={input}
        />
      )}
    </div>
  )
}
{
  /* <h3 style={{display:"grid",placeItems:"center"}}>Loading Countries...</h3> */
}
export default App
