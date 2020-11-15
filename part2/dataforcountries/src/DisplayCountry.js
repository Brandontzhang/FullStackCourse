import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const DisplayCountry = ({ country }) => {

    const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY
    const [weather, setWeather] = useState({
        current: {
            temperature: "",
            wind_speed: "",
            wind_dir: ""
        }
    })

    useEffect(() => {
        Axios
            .get(`http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${country.name}`)
            .then(resp => {
                // Ran out of monthly usage for API
                console.log(resp.data)
                if (resp.data.success === false) {
                    console.log("WHAT THE FRICK")
                    setWeather({
                        current: {
                            temperature: 55,
                            wind_speed: 9,
                            wind_dir: "SSW"
                        }
                    })
                } else {
                    setWeather(resp.data)
                }
            })
    })

    return (
        <div>
            <h2>{country.name}</h2>
            <div>
                <p>
                    capital: {country.capital}
                </p>
                <p>
                    population: {country.population}
                </p>
            </div>
            <div>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map(l => (
                        <li key={l.iso639_1}>{l.name}</li>
                    ))}
                </ul>
            </div>
            <img src={country.flag} alt={`${country.name}'s flag`} />
            <div>
                <h2>Weather in {country.captial} </h2>
                <p>Temperature: {weather.current.temperature} celsius</p>
                <img src="" alt="weather" />
                <p>Wind: {weather.current.wind_speed} kmph </p>
                <p>Direction: {weather.current.wind_dir}</p>
            </div>
        </div>
    )
}

export default DisplayCountry