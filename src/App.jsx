import './App.css'
import Header from './components/Header'
import useLocalStorage from 'use-local-storage'
import Home from './routes/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardInfo from './routes/CardInfo'

function App() {
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
        {/* <Home
          input={input}
          searchItems={searchItems}
          continent={continent}
          getCountry={getCountry}
          isPending={isPending}
          countries={countries}
          filteredCountry={filteredCountry}
          filteredContinent={filteredContinent}
        /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardInfo" element={<CardInfo theme={theme} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
