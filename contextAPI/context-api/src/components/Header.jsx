// this style while using Props     

// import ThemeStatus from "./ThemeStatus"
// import ThemeToggler from "./ThemeToggler"
// export default function Header ({theme,setTheme}){

//     return(
//         <>
//             <ThemeStatus theme={theme}/>
//             <ThemeToggler  theme={theme} setTheme={setTheme}/>
//         </>
//     )
// }

// ----------------------------------------------------------------

import ThemeStatus from "./ThemeStatus"
import ThemeToggler from "./ThemeToggler"

export default function Header () {
    return (
        <header>
            <ThemeStatus/>
            <ThemeToggler/>
        </header>
    )
}