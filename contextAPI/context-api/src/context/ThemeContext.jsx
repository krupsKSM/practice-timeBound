import {createContext , useState} from "react"

// Step 1: Create the context
export const ThemeContext = createContext();

// Step 2: Create the provider component
export const ThemeProvider = ({children}) => {

    const [theme , setTheme] = useState("light")

    // Step 3: Return the provider with a value to broadcast
    return(
        <ThemeContext.Provider value = {{theme , setTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}




















