
import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [auth, setAuth] = useState({
        user: null,
        token: null,
        isAuthenticated: false,
    })

    const login = ({username, email,password}) => {
        if (username === "admin" && email === "admin@abc.com"  && password === "1234") {
            setAuth({
                user: { username , email },
                token: "fake-jwt-token",
                isAuthenticated: true,
            })
        }else alert ("Invalid credentials")
    }

    function logout() {
        setAuth({
            user: null,
            token: null,
            isAuthenticated: false,
        })
    }
    return (
        <AuthContext.Provider value={{auth,login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}