import React, { useState } from "react";
const TodoInput = ({ onAdd }) => {
    const [task, setTask] = useState("")

    const handleAdd = () => {
        if (task.trim() === "") return
        onAdd(task)   // notify parent 
        setTask('')   // reset input
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Enter Task" value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
            </div>

        </>
    )
}
export default TodoInput
// The input and button are now inside a child component. It keeps its own local state for the input value and calls onAdd(task) to lift that task to the parent when needed.