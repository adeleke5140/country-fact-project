import './App.css'
import Header from './components/Header'
import useLocalStorage from 'use-local-storage'
import Home from './routes/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardInfo from './routes/CardInfo'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState(null)
  const [isPending, setIsPending] = useState(true)

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
    <Router>
      <div className="App" data-theme={theme}>
        <Header theme={theme} switchTheme={switchTheme} />
        <Routes>
          <Route
            path="/"
            element={<Home countries={countries} isPending={isPending} />}
          />
          <Route
            path="/cardInfo"
            element={<CardInfo theme={theme} countries={countries} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
