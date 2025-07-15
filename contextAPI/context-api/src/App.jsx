import React , {useState} from "react"
import Header from "./components/Header"

function App() {
  const [theme , setTheme] = useState("light")
  return (
    <>
      <div style = {{backgroundColor: theme === "light" ? "white" : "black" ,
                    color: theme === "light" ? "black" : "white"}}>
        <Header theme = {theme} setTheme = {setTheme}/>
      </div>
    </>
  )
}

export default App
