import { useState, useEffect } from "react"
import axios from 'axios'
import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"
import CountryList from "./components/CountryList"
import Loader from "./components/Loader"

function App () {
  const [countries, setCountries] = useState(null);
  const [isPending, setIsPending] = useState(true)
  let isActive = true;

  useEffect(() => {
    async function getCountries () {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        const data = response.data
        //get the first six object
        const firstSixCountries = data.slice(0,6)
        setCountries(firstSixCountries)
        setIsPending(false)
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
      {isPending && <Loader />}
      {countries && <CountryList countries={countries}/>}
    </div>
  )
}
{/* <h3 style={{display:"grid",placeItems:"center"}}>Loading Countries...</h3> */}
export default App
