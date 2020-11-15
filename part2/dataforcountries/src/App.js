import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import DisplayNames from './DisplayNames'
import DisplayCountry from './DisplayCountry'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        Axios
            .get(`https://restcountries.eu/rest/v2/name/${filter}`)
            .then(res => {
                setCountries(res.data)
            })
    }, [filter])

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="countryFilter">Find countries</label>
                    <input name="countryFilter" value={filter} onChange={(e) => setFilter(e.target.value)} />
                </div>
            </div>
            {countries.length > 10 && <p>Too many matches, specify a more specific filter</p>}
            {countries.length < 10 && countries.length > 1 && <DisplayNames countries={countries} setFilter={setFilter} />}
            {countries.length === 1 && <DisplayCountry country={countries[0]} />}
        </div>
    )
}

export default App