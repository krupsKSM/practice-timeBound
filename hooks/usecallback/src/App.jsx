import { useState , useCallback } from "react"
import Header from "./components/Header"
import TestUseCallback from "./components/TestUseCallback"
import Hello from "./components/Hello"
function App() {

  const [count, setCount] = useState(0)
  const [value, setValue] = useState(5)

  // const newFn = () => {}// this will cause re-render as props are changing on each re-render

  const newFn = useCallback(()=>{setValue(prev => prev+ 5)}, [value])  //Create a new function only when value changes.

  // STABLE function
  const sayHello = useCallback(() => {
    console.log("helllllloooooooo")
  } , [])

  // if useCallback removed then its a UNSTABLE function 
  function sayHi(){
    console.log("HIIIIIIIIi")
  }

  return ( 
    <>
      <h2>useCallback + React.memo</h2>
      <Header />
      <br />
      <h3>count : {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}> Increment ++</button>
      <br/>

      <TestUseCallback newFn = {newFn}/>
      <h3>value : {value}</h3>
      <button onClick = {newFn}>++5</button>

      <Hello onLog={sayHello} onHi = {sayHi}/>
    </>
  )
}
export default App

// we see that even though we click on count , <Header /> component is rerendered as this is the natural approach of useState. So we use React.memo(componentName) while exporting child components, check in <Header/>