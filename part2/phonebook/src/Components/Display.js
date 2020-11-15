import React from 'react'

const Display = ({ persons, newFilter, deletePerson }) => {

    const filterArray = (persons) => (
        persons.filter(p => p.name.toUpperCase().includes(newFilter.toUpperCase()))
    )

    return (
        <ul>
            {filterArray(persons).map(p => (
                <li key={p.name}>
                    {p.name} {p.number}
                    <button onClick={() => deletePerson(p.id)}>Delete</button>
                </li>)
            )}
        </ul>
    )
}

export default Display