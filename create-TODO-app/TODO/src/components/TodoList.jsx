const TodoList = ({todos}) => {
    if (todos.length === 0) return <p>No Tasks yet.</p>
    return(
        <>
        <div>
            <ul>
                {todos.map((item, index)=>{
                    return <li key = {index}>{item}</li>
                })}
            </ul>
        </div>
        </>
    )
}
export default TodoList
