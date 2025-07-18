import React from "react"
function Header(){
    console.log("Header rendered")
    return (
        <>
            <h3>Header component</h3>
        </>
    )
}

export default React.memo(Header)

//React.memo()	Prevents child component from re-rendering unless props actually change