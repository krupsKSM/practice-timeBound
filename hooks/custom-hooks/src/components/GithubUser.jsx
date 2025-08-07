import useGithub from "../hooks/useGithub"

const GithubUser = ({ username }) => {

    // const [user, setUser] = useState("")
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // useEffect(() => {

    //     const fetchData = async () => {
    //         setLoading(true)

    //         try {
    //             const response = await fetch(`https://api.github.com/users/${username}`)
    //             const responseData = await response.json()

    //             setUser(responseData)
    //             setLoading(false)
    //             console.log(responseData);
                
    //         } catch (error) {
    //             setError(error)
    //             setLoading(false)
    //         }
    //     }

    //     fetchData()
    // }, [username])
    // moved as custom hook

    // https://api.github.com/users/hiteshchoudhary

    const { user, loading, error } = useGithub(username)

    return (
        <div className="github-user">
            {/* {username} */}
            {
                loading &&
                <p>Loading..........</p>
            }
            {
                error &&
                <p>{error.message}</p>
            }
            {
                user && (
                    <ul className="details">
                        <li><img src={user.avatar_url} alt="" /></li>
                        <li><strong>Name:</strong> {user.name}</li>
                        <li><strong>Bio:</strong> {user.bio ? user.bio : "NA"}</li>
                        <li><strong>Location:</strong> {user.location ? user.location : "NA"}</li>
                        <li><strong>Following:</strong> {user.following}</li>
                        <li><strong>PublicRepos:</strong> {user.public_repos}</li>

                    </ul>
                )
            }


        </div>
    )
}
export default GithubUser