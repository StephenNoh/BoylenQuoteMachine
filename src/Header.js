import React from "react"
import boylencircle from "./boylencircle.png"


function Header () {
    return (
        <header className="App-header">
            <p id="text">
            The Jim Boylen Random Quote Machine!
            </p>
         <img src={boylencircle} className="App-logo" alt="logo" />  
         
        </header>
    )
}

export default Header