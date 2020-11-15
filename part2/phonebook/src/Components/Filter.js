import React from 'react'

const Filter = ({ newFilter, setNewFilter }) => (
    <div>
        filter shown with <input value={ newFilter } onChange={(e) => {setNewFilter(e.target.value)}} />
    </div>
)

export default Filter