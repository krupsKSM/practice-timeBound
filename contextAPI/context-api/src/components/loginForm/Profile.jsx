import {useContext} from "react"
import {AuthContext} from "../../context/AuthContext"
export default function Profile(){

    const {auth} = useContext(AuthContext)
    return auth.isAuthenticated ? (
        <div>
            <h2>Profile</h2>
            <p>Username: {auth.user.username}</p>
            <p>Token: {auth.token}</p>
        </div>
    ):(
        <p>Please login to view your profile</p>
    )
}