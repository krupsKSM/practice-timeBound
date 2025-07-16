// used only in props passing/drilling

// export default function ThemeToggler({theme, setTheme}){
//     const toggle =() =>{
//         setTheme(theme === "light" ? "dark" : "light")
//     }
//     return (
//         <>
//             <button onClick={toggle}>Toggle Theme</button>
//         </>
//     )
// }

import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"
const ThemeToggler = () => {

    const {theme , setTheme} = useContext(ThemeContext)
    function toggle (){
        setTheme (theme === "light" ? "dark" : "light")
    }
    return(
        <>
            <button onClick = {toggle}>Toggle Theme</button>
        </>
    )
}
export default ThemeToggler