import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ good, neutral, bad }) => {

  const positivePercent = () => {
    if (good + bad + neutral === 0) {
      return 0
    } else {
      return good / (good + neutral + bad)
    }
  }

  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <table>
        <Statistic text={"good"} num={good} />
        <Statistic text={"neutral"} num={neutral} />
        <Statistic text={"bad"} num={bad} />
        <Statistic text={"all"} num={good + neutral + bad} />
        <Statistic text={"average"} num={(good - bad) / 3} />
        <Statistic text={"positive"} num={positivePercent()} />
      </table>
    )
  }
}

const Statistic = ({text, num}) => (
  <tr>
    <td>{text}</td>
    <td>{num}</td>
  </tr>
)


const Button = ({setNum, text}) => {
   return (
     <button onClick={setNum}> {text} </button>
   )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button setNum={() => { setGood(good + 1) }} text={"Good"} />
      <Button setNum={() => { setNeutral(neutral + 1) }} text={"Neutral"} />
      <Button setNum={() => { setBad(bad + 1) }} text={"Bad"} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
