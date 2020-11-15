import React, { useState } from 'react'
import Filter from './Filter'
import AddForm from './AddForm'
import Display from './Display'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
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

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
            <h2>Add a new</h2>
            <AddForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Display persons={persons} newFilter={newFilter}/>
        </div>
    )
}

export default App