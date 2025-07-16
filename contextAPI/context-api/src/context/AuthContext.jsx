
import React, { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    // STEP 1️: Initialize state with nulls
    const [auth, setAuth] = useState({
        user: null,
        token: null,
        isAuthenticated: false,
    })

    // STEP 2️: On first load, check localStorage
    useEffect(() => {
        const savedAuth = localStorage.getItem("auth")

        if (savedAuth) {
            setAuth(JSON.parse(savedAuth))
        }
    }, [])

    // STEP 3️: Login function with rememberMe flag
    const login = ({ username, email, password, rememberMe }) => {
        if (username === "admin" && email === "admin@abc.com" && password === "1234") {
            const authData = ({
                user: { username, email },
                token: "fake-jwt-token",
                isAuthenticated: true,
            })

            setAuth(authData)

            if (rememberMe) {
                localStorage.setItem("auth", JSON.stringify(authData))
            }
        } else alert("Invalid credentials")
    }

    function logout() {
        setAuth({
            user: null,
            token: null,
            isAuthenticated: false,
        })
        localStorage.removeItem("auth")
    }
    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}