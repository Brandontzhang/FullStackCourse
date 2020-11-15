import React from 'react'
import '../css/Alert.css'

const AddUserAlert = ({ name, error }) => {
    return (
        <div id={error ? "alert" : "error"}>
            {error ? <h1>Added {name} </h1> : <h1> {name} was already removed</h1> }
        </div>
    )
}

export default AddUserAlert