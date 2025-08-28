import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [countryToShow, setCountryToShow] = useState(null)

  useEffect(() => {
    const time = setTimeout(() => {
      if (!value) {
        return
      }
      axios
        .get(`https://restcountries.com/v3.1/name/${value}`)
        .then((response) => {
          setCountries(response.data)
        })
        .catch(() => {
          setCountries([])
        })
    }, 2000)

    return () => clearTimeout(time)
  }, [value])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <form>
        find countries <input value={value} onChange={handleChange} />
      </form>

      {countries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countries.length === 1 ? (
        <CountryDetails country={countries[0]} />
      ) : (
        <div>
          {countries.map((country) => (
            <>
              <span>{country.name.common}</span>{' '}
              <button onClick={() => setCountryToShow(country)}>show</button>
              <br />
            </>
          ))}
          {countryToShow && <CountryDetails country={countryToShow} />}
        </div>
      )}
    </div>
  )
}

export default App
