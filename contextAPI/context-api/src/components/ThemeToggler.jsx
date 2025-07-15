export default function ThemeToggler({theme, setTheme}){
    const toggle =() =>{
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
            <button onClick={toggle}>Toggle Theme</button>
        </>
    )
}