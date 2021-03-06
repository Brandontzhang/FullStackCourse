import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })
  let quoteNum = Math.floor(Math.random() * props.anecdotes.length)
  let maxIndex = 0
  let mostVotes = 0

  for (let index in points) {
    if (points[index] > mostVotes) {
      maxIndex = index;
      mostVotes = points[index]
    }
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote quote={props.anecdotes[maxIndex]} vote={mostVotes} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote quote={props.anecdotes[selected]} vote={points[selected]}/>
        <button onClick={() => {setPoints({...points, [selected]: points[selected] + 1})}}>Vote</button>
        <button onClick={() => {setSelected(quoteNum)}}>Next anecdote</button>
      </div>
    </div>
  )
}

const Anecdote = ({quote, vote}) => (
  <p>{quote} {vote} votes</p>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)