import React from 'react'

const DisplayNames = ({ countries, setFilter }) => {
    return (
        <div>
            <ul>
                {countries.map(country => (
                    <li key={country.alpha3Code}>
                        {country.name}
                        <button onClick={() => setFilter(country.name)}>show</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayNames