import React from "react";
import ME from "./me.jpg"

const App = () => {
    return(
        <div id="app">
        <img width="150px" height="150px" src={ME} />
        <Info />
        <Social />
        </div>
    )
}

const Info = () => {
    const name = "Songphon Yuenyaw"
    const bio = "I'm Junior Software Developer"
    return(
    <div>
        <h1>{name}</h1>
        <p>{bio}</p>
    </div>
    )
}

const Social = () => {
    return (
        <div>
            <a href="https://www.facebook.com/sozeroman221">Faceook</a>
            <a href="www.twitter.com/">Twitter</a>
        </div>
    )
}

export default App