import AppTest from "./components/AppTest"
import React, {useState} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {

    const [todos, setTodos] = useState([])  // todos -> array of Objects {id, task}

    const handleAdd = (task) => {
        const newTodo = {
            id: Date.now(),
            task, //  this means task: task
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const handleDelete = (id) =>{
        const filtered = todos.filter(todo => todo.id !== id)
        setTodos(filtered)
    }
    return (
        <>
            <h1>hi</h1>
            {/* AppTest component used for dry run */}
            {/* <AppTest />    */}

            <h2>To-Do App</h2>
            <TodoInput onAdd = {handleAdd}/>   
            {/* now onAdd gets task from TodoInput.jsx child (lifting state up) */}
           
            {/* <div>
                <ul>
                    {todos.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div> not required once we use TodoList component  */}

            <TodoList todos = {todos} onDelete= {handleDelete}/>
        </>
    )
}
export default App