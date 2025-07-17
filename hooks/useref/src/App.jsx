import { useState, useEffect , useRef } from "react"
export default function App() {

  const [value, setValue] = useState(0)
  const count = useRef(0)   // using useRef(0) to create a persistent count value that doesn't trigger a re-render when updated.

  console.log (count)

  useEffect(()=>{
    count.current += 1
  },)

  // use 2 - directly access and manipulate a DOM element in React
  const inputElem = useRef()

  const changeStyle = () => {
    console.log(inputElem.current)
    inputElem.current.style.background = "yellow"
    inputElem.current.style.border = "3px dotted green"
  }
  // Focus the input
  function handleFocus(){
    inputElem.current.focus()
  }
  // Blur the input
  function handleBlur(){
    inputElem.current.blur()
  }
  // Read value directly from DOM (uncontrolled)
  function readValue(){
    alert ("Input value read : " +  inputElem.current.value) 
  }

  function scrollToInput(){
    inputElem.current.scrollIntoView({behaviour: "smooth"})
  }
  return (
    <>
      <h2>useRef </h2>
      <button onClick={() => setValue(prev => prev - 1)}>-</button>
      <h2>Value is {value}</h2>
      <button onClick={() => setValue(prev => prev + 1)}>+</button>
      <br />

      <h3>The page rendered {count.current} times</h3>

      <input type="text" ref = {inputElem}/>
      <button onClick = {changeStyle} style = {{margin: "7px"}}>Click here</button>

      {/* ✅ ref is not an HTML attribute.
          ✅ It is a React-specific prop used to reference DOM elements or component instances. */}
      <br/>
      <div className = "btn-group" style={{ margin: "8px", display: "flex", padding: "10px" , gap:"10px" }}>
        <button onClick={handleFocus} >Focus input</button>
        <button onClick={handleBlur}>Blur input</button>
        <button onClick = {readValue}>Read value</button>
        <button onClick={scrollToInput}>Scroll to Input</button>
      </div>
    </>
  )
}