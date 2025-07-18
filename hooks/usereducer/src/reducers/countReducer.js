export const initialState = {count : 0}

export function countReducer(state, action){

    switch(action.type){
        case "ADD":
            return {count: state.count + action.payload}
        case "SUBTRACT":
            return {count: state.count - action.payload}
        case "RESET":
            return {count: 0}
        default:
            return state

    }
}