// Initial state — just like default value in useState
export const initialState = {count: 0}

export const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    ADD: "ADD",
    RESET: "RESET",
}
// This is the reducer function.
// It controls HOW the "state" should change based on the "action" sent.
export function counterReducer(state, action){               
    switch(action.type){        // We check the type of action requested
        case ACTIONS.INCREMENT: 
            return {count: state.count + 1}   // We return the new state object
        case ACTIONS.DECREMENT: 
            return {count: state.count - 1}
        case ACTIONS.ADD:
            return {count: state.count + action.payload}
        case ACTIONS.RESET: 
            return {count: 0}
        default :
            return state     // Always return current state if action is unknown
    }
}

// state-> current state
// {type, payload} = action i.e action is an object with keys "type" , "payload"
