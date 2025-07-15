import ThemeStatus from "./ThemeStatus"
import ThemeToggler from "./ThemeToggler"
export default function Header ({theme,setTheme}){

    return(
        <>
            <ThemeStatus theme={theme}/>
            <ThemeToggler  theme={theme} setTheme={setTheme}/>
        </>
    )
}