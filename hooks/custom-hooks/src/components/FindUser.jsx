import { useState } from "react"
import GithubUser from "./GithubUser"

const FindUser = () => {
    const [username, setUsername] = useState("")

    console.log(username)
    return (
        <>
            <h1>Find User</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='username'>Enter github username: </label>
                    <input type="text" placeholder="Enter Username"
                        onChange={event => setUsername(event.target.value)} />

                </div>
            </form>

            <div className="result">
                {username
                    ? <GithubUser username={username} />
                    : <p>Please initiate a search</p>}
            </div>
        </>
    )
}

export default FindUser