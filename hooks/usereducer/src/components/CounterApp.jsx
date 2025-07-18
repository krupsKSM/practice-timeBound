import {useReducer} from "react"
import {counterReducer , initialState , ACTIONS} from "../reducers/counterReducer"

export default function CounterApp(){

    // useReducer returns: [state, dispatch]
    // - "state" is your current state (like count)
    // - "dispatch" is a function to SEND actions (type + optional payload)

    const [state,dispatch] = useReducer( counterReducer , initialState)

    return (
        <>
        <h2>Counter App</h2>
        <p>counter using useReducer: {state.count}</p>

        <div style={{display: "flex", gap: "5px"}}>
            {/* 🔼 We send an action: { type: 'INCREMENT' } */}
        <button onClick = {()=> dispatch({type: ACTIONS.INCREMENT})}> +1</button>
        <button onClick = {()=> dispatch({type: ACTIONS.DECREMENT})}> -1</button>
        <button onClick = {()=> dispatch({type: ACTIONS.RESET})}> RESET</button>
        </div>
        {/* ✅ Each button "dispatches" an action object
        Dispatching means: "Hey reducer, do something!" */}

        <button onClick = {()=> dispatch({type: ACTIONS.ADD , payload: 3})}> + 3</button>
        </>
    )
}

// state.count is our current value
// dispatch is how we "send" actions
// useStae updates by setState while useReducer updates via dispatch(action)
// 
