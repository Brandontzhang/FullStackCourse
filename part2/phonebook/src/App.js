import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import AddForm from './AddForm'
import Display from './Display'
import Axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState(0)
    const [newFilter, setNewFilter] = useState('')

    const addName = (e) => {
        e.preventDefault()

        let inBook = persons.reduce((b, p) => b || p.name === newName, false)

        if (!inBook) {
            setPersons([...persons, { name: newName, number: newNumber }])
        } else {
            alert(`${newName} is already in the phonebook`)
        }
    }

    useEffect(() => {
        Axios
            .get('http://localhost:3001/persons')
            .then(res => {
                setPersons(res.data)
            })
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
            <h2>Add a new</h2>
            <AddForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Display persons={persons} newFilter={newFilter} />
        </div>
    )
}

export default App