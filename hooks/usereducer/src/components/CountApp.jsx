import {initialState , countReducer } from "../reducers/countReducer" 
import {useReducer} from "react"
export default function CountApp(){

    const [state, dispatch] = useReducer(countReducer , initialState)
    return(
        <>
        <h1>CountApplication</h1>
        <button onClick = {() => dispatch({type: "ADD" , payload: 7})}>ADD 7</button>
        <button onClick = {() => dispatch({type: "SUBTRACT" , payload: 5})}>subtract 5</button>
        <button onClick = {() => dispatch({type: "RESET"})}>RESET</button>

        <h3>Count using countApp is : {state.count}</h3>
        </>
    )
}