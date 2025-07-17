import {useState} from "react"

export default function App(){
  const [car, setCar] = useState({
    brand: "Ferrari",
    color: "red",
    model: "ninza",
    year: 2023
  })

  const [count , setCount] = useState(0)

  function changeColor(){
    setCar(prev => {
      return ({...prev , color : "blue"})
    })
  }

  function increment(){
    setCount(prev => prev+ 1)
  }
  function decrement(){  
    setCount(prev => {
      setCount(prev - 1)
    })
  }

  function incrementByFour(){
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  return(
    <>
    <h1>useState</h1>
    <h2>MY {car.brand}</h2>
    <h2>It's a {car.color} {car.model} from {car.year}</h2>
    <button onClick = {changeColor}>change</button>
    <br/><br/>
    <div style = {{border: "2px solid red " , width :"650px" , height: "100px" , padding: "10px"}}>
      count : {count}
      <button style = {{margin: "30px"}}  onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
      <button style = {{margin: "30px"}}  onClick = {incrementByFour}>IncrementBy 4</button>
    </div>
    </>
  )
}