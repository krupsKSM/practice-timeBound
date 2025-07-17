import {useState , useEffect} from "react"
export default function App(){

  const [count , setCount] = useState(0)
  const [counter , setCounter] = useState(0)

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCount(count + 1) // <- stale count value here!
    },2000)

    return ()=> clearInterval (intervalId)
  }, [])      // can show 2,3 sometimes instead of 1 due to stale closure

  // useEffect(()=>{
  //   const id = setInterval (()=>{
  //     setCount(count + 1 )
  //     console.log("count now is" , count )  // logs 0 
  //   }, 1000)

  //   return () => clearInterval (id)
  // }, [count])
  useEffect(()=>{
    const id = setInterval (()=>{
      setCount(prev => prev + 1 )
      console.log("count ani " , count )  // logs 
    }, 1000)

    return () => clearInterval (id)
  }, [count])

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCounter(prev => prev + 1)   // use function form to avoid stale closure
    },1000)

    return () => clearInterval(intervalId)
  }, [counter])
  return(
    <>
    <h2>hello useEffect</h2>
    <h3>I have rendered {count} times</h3>
    <h3>I have rendered {count} times</h3>
    <h3>I have rendered {counter} times</h3>
    </>
  )
}