const TodoList = ({ todos , onDelete}) => {
    if (todos.length === 0) return <p>No Tasks yet.</p>

    return (
        <>
            <div>
                <ul>
                    {todos.map((item) => {
                        return (<li key={item.id}>
                            {item.task} 
                            <button onClick = {() => onDelete(item.id)}>Delete</button>
                        </li>)
                    })}
                </ul>
            </div>
        </>
    )
}
export default TodoList
