import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import AddForm from './Components/AddForm'
import Display from './Components/Display'
import service from './Services/services'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState(0)
    const [newFilter, setNewFilter] = useState('')

    const addName = (e) => {
        e.preventDefault()

        let inBook = persons.reduce((b, p) => b || p.name === newName, false)

        if (!inBook) {
            service.createPerson({name: newName, number: newNumber})
                .then(person =>  setPersons([...persons, { name: newName, number: newNumber }]))
        } else {
            const searchPerson = getPersonByName(newName)
            service.updateNumber(searchPerson, newNumber)
        }
    }

    const getPersonByName = (name) => {
        return persons.find(p => p.name === name)
    }

    const deletePerson = (id) => {
        service.deletePerson(id)
    }

    useEffect(() => {
        service.getPersons()
            .then(persons => setPersons(persons))
    }, [persons])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
            <h2>Add a new</h2>
            <AddForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Display persons={persons} newFilter={newFilter} deletePerson={deletePerson} />
        </div>
    )
}

export default App