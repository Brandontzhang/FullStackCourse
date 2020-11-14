import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ courses }) => {
    return (
        courses.map(c => (
            <div>
                <Header text={c.name} />
                <Content parts={c.parts} />
            </div>
        ))
    )
}

export default Course