
import {useState , useContext} from "react"
import {AuthContext} from "../../context/AuthContext"

export default function LoginForm(){

    const {auth , login} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target 

        setFormData(prev => ({
            ...prev,
            [name] : value,
        }))
    }
    

    function handleSubmit(e){
        e.preventDefault()
        login(formData)     // pass whole object to login()
        
    }
    console.log(`username : ${formData.username} , email : ${formData.email} , password : ${formData.password}`)
    return(
        <>
        <form onSubmit = {handleSubmit}><h2>Login form</h2>
        <div>
            <label>Username</label>
            <input type = "text" name ="username" value = {formData.username} 
            onChange= {handleChange} required />
        </div>
        <div>
            <label>Email</label>
            <input type = "email" name ="email" value = {formData.email} 
            onChange= {handleChange} required />
        </div>
        
        <div>
            <label>password</label>
            <input type = "password" name ="password" value = {formData.password} 
            onChange= {handleChange} required />
        </div>

        <button type = "submit">SUBMIT</button>

        {auth.isAuthenticated && (
            <p>Welcome , {auth.user.username} . your email id is {auth.user.email}</p>
        )}
        </form>


        </>
    )
}