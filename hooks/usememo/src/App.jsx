import {useState , useMemo} from "react"

export default function App(){

  const [number, setNumber] = useState(0)
  // const [result , setResult] = useState(0)
  const [counter , setCounter] = useState (0)

  function cubeNum(num) { 
    console.log("calculation done")
    return Math.pow(num, 3)
  }
  // const result = cubeNum(number)   // rather we use useMemo so that it recomputes this only when the dependency array updates

  const result = useMemo(()=>{
    return cubeNum(number)
  } , [number])
  
  // function handleCalculate (){
  //   const cube = cubeNum(Number(number))
  //   setResult(cube)
  // }
  return (
    <>
    <h2>useMemo hook</h2>
    <input type = "number" value = {number} placeholder="Enter a number" 
    onChange= {e => setNumber(e.target.value)}/> 
    {/* <button onClick= {handleCalculate} style = {{margin: "15px"}}>calculate</button> */}
    { result !== null &&
      <p>cube of the entered number {number} is <strong>{result}</strong></p>
    }
    <button onClick = {e=> setCounter(prev => prev + 1)}>counter++</button>
    <h2>counter : {counter}</h2>
    </>
  )
}

//we see that even when we dont change input value and simply click on counter ++ , page renders and console.log("calculation done") runs so we use useMemo hook 