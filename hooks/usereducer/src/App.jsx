import {useState} from "react"
import CounterApp from "./components/CounterApp"
import CountApp from "./components/CountApp"
export default function App(){

  const[count, setCount] = useState(0)
  

  return (
    <>
    <button onClick = {()=>setCount(prev => prev + 2)}>+2</button>
    <button onClick = {()=>setCount(prev => prev - 2)}>-2</button>
    <h3>count : {count}</h3>
    <hr/>
    <h3>useReducer hook</h3>
    <CounterApp/>
    <hr/>
    <CountApp/>
    </>
  )
}