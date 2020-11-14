import React from 'react'

const Content = ({ parts }) => {

    const exerciseSum = parts.reduce((s, part) => { return s + part.exercises }, 0)
    return (
        <div>
            {parts.map(c => (
                <p>{c.name} {c.exercises}</p>
            ))}

            <strong> total of {exerciseSum} </strong>
        </div>
    )
}

export default Content