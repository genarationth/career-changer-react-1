import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState('Your Name');
    const [bio, setBio] = useState('Your Bio')

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleBio = (event) => {
        setBio(event.target.value);
    };

    return(
        
        <div id="app">
        <img width="150px" height="150px" src="https://www.dr-kong.in.th/wp-content/uploads/2016/08/dummy-prod-1.jpg" />
        <Input handleName={handleName} handleBio={handleBio}/>
        <Info name={name} bio={bio} />
        <Social />
        </div>
    )
}

const Input = ({handleName, handleBio}) => {
    return(
        <div>
            <input type="text" placeholder="Name Here" onChange={handleName} />
            <input type="text" placeholder="Short Bio" onChange={handleBio} />
        </div>
    );
}

const Info = ({name, bio}) => {
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
            <a href="https://www.facebook.com/">Faceook</a>
            <a href="www.twitter.com/">Twitter</a>
        </div>
    )
}

export default App