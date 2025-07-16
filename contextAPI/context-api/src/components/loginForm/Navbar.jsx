import {useContext } from "react"
import {AuthContext} from "../../context/AuthContext"
export default function Navbar (){
    const {auth , logout} = useContext(AuthContext)

    return(
        <>
        <nav style={{display: "flex" , justifyContent: "space-between" , backgroundColor: "red"}}>
            <span style = {{margin:"5px"}}>My vite App</span>
            {auth.isAuthenticated ? (
                <div >
                    <span>Welcome { auth.user.username}</span>
                    <button onClick= {logout} style = {{margin: "10px"}}>Logout</button>
                </div>
            ) : (
                <span>Welcome Guest</span>
            )}
        </nav>
        </>
    )
}