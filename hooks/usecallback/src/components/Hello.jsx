import React from "react"
function Hello({onLog, onHi}){
    console.log("hello .... from hello component")
    return(
        <>
        <p>in Hello Component</p>
        <button onClick= {onLog}>Log Hello</button>
        <button onClick= {onHi}>Log Hiiii</button>
        </>
    )
}

export default React.memo(Hello)