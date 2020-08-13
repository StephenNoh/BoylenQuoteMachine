import React from "react"
import boylencircle from "./boylencircle.png"
import sirius from "./Sirius.mp3"



function Header () {
    return (
        <header className="App-header">
            <h1 id="text">
            The Jim Boylen <br />Random Quote Machine!
            </h1>
         <img src={boylencircle} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header