
// used only in props passing/drilling
// export default function ThemeStatus({theme}){
//     return <h2>current Theme : {theme}</h2>
// }

import {useContext} from "react"
import {ThemeContext} from "../../context/ThemeContext"

export default function ThemeStatus() {
    const {theme} = useContext(ThemeContext)  // get theme (value) from context

    return <h2>Current Theme: {theme}</h2>
}