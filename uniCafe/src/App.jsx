import { useState } from "react"

const Header = ({value})=>{
  return(
    <h1>{value}</h1>
  )
}
const Button = ({text,onClick}) =>{
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
    
  )
}
const App = ()=>{
  const [positive,setPositive] = useState(0)
  const [negative,setNegative] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [average,setAverage] = useState(0)
  const [positiveRating,setPositiveRating] = useState(0)
  const [show,setShow] = useState(false)
  const handlePositive = ()=>{
    setPositive(prev => prev + 1)
    handleAverage(positive+1,neutral,negative)
    setShow(true)
  }
  const handleNegative = ()=>{
    setNegative(prev => prev + 1)
    handleAverage(positive,neutral,negative+1)
    setShow(true)
  }
  const handleNeural = ()=>{
    setNeutral(prev => prev + 1)
    handleAverage(positive,neutral+1,negative)
    setShow(true)
  }
  const handleAverage = (positive,neutral,negative)=>{
    const total = positive + neutral + negative
    const avg = (positive - negative)/total
    setAverage(avg)
    setPositiveRating(positive/total * 100)
  }
  const StatisticLine = ({value,text})=>{
    return(
      <p>{text} {value}</p>
    )
  }
  const Statistics = ({value,positive,neutral,negative,positiveRating})=>{
    return(
      <>
      <Header value={value}/>
      <StatisticLine value={positive} text="Good"/>
    <StatisticLine value={negative} text="Bad"/>
    <StatisticLine value={neutral} text="neutral"/>
    <p>All {positive + negative + neutral}</p>
    <p>Average {(positive - negative)/(positive + negative + neutral)}</p>
    <p>Postive {positiveRating}%</p>
    </>
    )
  }
  const content = show?<Statistics 
  value="Statistics" 
  positive={positive} 
  neutral={neutral} 
  negative={negative}
  positiveRating={positiveRating}
  /> : <h1>No FeedBack</h1>
  return(
    <>
    <Header value={'Give FeedBack'}/>
    <Button text={"Positive"} onClick={handlePositive} />
    <Button text={"Neutral"} onClick={handleNeural} />
    <Button text ={"Negative"} onClick={handleNegative} />
    { content }
    </>
  )
}
export default App;