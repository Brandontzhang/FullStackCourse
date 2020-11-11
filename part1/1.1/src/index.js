import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => (
  <h1>{props.course}</h1>
)

// 1.1
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

// 1.2
const Content = (props) => (
  <React.Fragment>
    <Part part={props.part1} excercise={props.exercises1} />
    <Part part={props.part2} excercise={props.exercises2} />
    <Part part={props.part3} excercise={props.exercises3} />
  </React.Fragment>
)

const Total = (props) => (
  <p>Number of exercises {props.number}</p>
)

const Part = (props) => (
  <p>
    {props.part} {props.excercise}
  </p>
)

ReactDOM.render(<App />, document.getElementById('root'))