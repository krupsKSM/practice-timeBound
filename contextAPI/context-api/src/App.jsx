// import React , {useState} from "react"
// import Header from "./components/Header"

// function App() {
//   // const [theme , setTheme] = useState("light")  //not required once Context API used 
//   return (
//     <>
//       <div style = {{backgroundColor: theme === "light" ? "white" : "black" ,
//                     color: theme === "light" ? "black" : "white" , height: "100vh" , width: "100vw"}}>

//         {/*only while passing props  */}
//         {/* <Header theme = {theme} setTheme = {setTheme}/> */}

//         {/* -------------------------------------------- */}
        
//       </div>
//     </>
//   )
// }

// export default App

import {useContext} from "react"
import {ThemeContext} from "./context/ThemeContext"
import Header from "./components/theme/Header"
import LoginForm from "./components/loginForm/LoginForm"
import Navbar from "./components/loginForm/Navbar"
import Profile from "./components/loginForm/Profile"
export default function App () {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div style = {{backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white", height: "100vh" , width: "100vw"}}>
      <Navbar/>
      <Header/>
      <LoginForm/>
      <Profile />
      </div>

      
    </>
  )
}