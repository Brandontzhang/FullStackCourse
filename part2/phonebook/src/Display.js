import React from 'react'

const Display = ({ persons, newFilter }) => {

    const filterArray = (persons) => (
        persons.filter(p => p.name.toUpperCase().includes(newFilter.toUpperCase()))
    )

    return (
        <ul>
            {filterArray(persons).map(p => (<li key={p.name}>{p.name} {p.number}</li>))}
        </ul>
    )
}

export default Display