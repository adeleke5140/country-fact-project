import Nav from '../components/Nav'
import Loader from '../components/Loader'
import CountryList from '../components/CountryList'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Home({ countries, isPending }) {
  const [input, setInput] = useState('')
  const [filteredCountry, setFilteredCountry] = useState([])
  const [continent, setContinent] = useState('')
  const [filteredContinent, setFilteredContinent] = useState([])

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

  return (
    <div className="home">
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
