import React from "react"
function TestUseCallback({newFn}){
    console.log("TestUseCallback called")
    return (
        <>
        <h3>In TestUseCallback component </h3>
        <button onClick = {newFn}>call newFn from child</button>
        </>
    )
}
export default React.memo(TestUseCallback)