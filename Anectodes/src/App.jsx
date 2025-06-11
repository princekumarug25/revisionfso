import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(new Array(8).fill(0))
  const [popular,setPopular]=useState(0)
  const handleRandom = ()=>{
    const random = Math.floor(Math.random()*8);
    setSelected(random)
  }
  const handleVote = (id)=>{
    const newCopy = [...votes]
    newCopy[id]++;
    setVotes(newCopy)
    let maxIndex = 0;
    let maxVote = -1;
    for(let i = 0;i<8;i++){
      if(maxVote < newCopy[i]){
        maxVote = newCopy[i]
        maxIndex = i;
      }
    }
    console.log(maxIndex)
    setPopular(maxIndex);
  }
  return (
    <div>
      <p><strong>{anecdotes[selected]}</strong></p>
      <p>Votes <strong>{votes[selected]}</strong></p>
      <button onClick={()=>handleVote(selected)}>Vote</button>
      <button onClick={handleRandom}>Next Anecdotes</button>
      <h1>Most popular</h1>
      <p><strong>{anecdotes[popular]}</strong></p>
    </div>
  )
}

export default App