const Header = ({course})=>{
  return(
    <h1>{course}</h1>
  )
}
const Part = ({part,exercise})=>{
  return(
    <p>
        {part} {exercise}
      </p>
  )
}
const Content = ({parts})=>{
  return(
    <>
    {parts.map(part =>{
      return(
        <Part part={part.name} exercise={part.exercise} key={part.id}/>
      )
    })}
    </>
  )
}
const Total = ({parts})=>{
  const total = parts.reduce((prev,curr)=>{
    return prev + curr.exercises
  },0)
  return(
    <p>Number of exercises {total}</p>
  )
}
const Course = ({course})=>{
  return(
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}
export default Course;