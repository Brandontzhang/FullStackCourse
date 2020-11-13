import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content2 parts={course.parts} />
      {/* 1.3
      <Total number={part1.exercises + part2.exercises + part3.exercises} /> */}
      {/* 1.4 */}
      <Total number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => (
  <h1>{props.course}</h1>
)

// 1.1
/*
const Content1 = (props) => (
  <React.Fragment>
    <p>
      {props.part1} {props.exercises1}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </React.Fragment>
)
*/

// 1.2/1.3
const Content = (props) => (
  <React.Fragment>
    <Part part={props.part1.name} excercise={props.part1.exercises} />
    <Part part={props.part2.name} excercise={props.part2.exercises} />
    <Part part={props.part3.name} excercise={props.part3.exercises} />
  </React.Fragment>
)

// 1.4
const Content2 = (props) => {
  return (props.parts.map(p => (
    <Part part={p.name} excercise={p.exercises} />
  )))
}

const Total = (props) => (
  <p>Number of exercises {props.number}</p>
)

const Part = (props) => (
  <p>
    {props.part} {props.excercise}
  </p>
)

ReactDOM.render(<App />, document.getElementById('root'))