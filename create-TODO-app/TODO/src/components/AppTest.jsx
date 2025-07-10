import React, {useState} from "react"  //1

const AppTest = () =>{   //2
    const [task,setTask] = useState("")  //5  state to hold input task
    const [todos, setTodos] = useState([]) //7   state to hold tasks as an array

    // 9 Add task 
    const handleAdd = () => {
        if (task.trim() === "") return // empty tasks not added
        
        console.log(task)
        // Add task to todos array
        setTodos(prev => {
            const updated = [task, ...prev]
            console.log("in setTodos",updated)
            return updated
        })
        console.log("outside",todos)
        setTask("")  // clear input box
    }

    return (   //3
        <>
        {/* 4 */}
        <h2>ToDo App </h2>  
        <input type="text" placeholder = "enter task" 
            // 6 make input controlled
            value = {task} onChange = { e => setTask(e.target.value)}
        />
        <button onClick = {handleAdd}>Add</button>
        {/* check for basic ui */}

        {/* 8  render list*/}
        <ul>
            {todos.map((item, index) => {
               return <li key={index}>{item}</li>
            })}
        </ul>
        
        </>
    )
}

export default AppTest