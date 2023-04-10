import React, { useState } from 'react';

function App() {
    // adding state here.
    const [choices, setChoices ] = useState();

  const handleClick = (value) => {
    // code here.
    setChoices(value);
  };

  return (
    <div>
      <button onClick={() => handleClick('Fullname')}>Fullname</button>
      <button onClick={() => handleClick('Age')}>Age</button>
      <button onClick={() => handleClick('Picture')}>Picture</button>
      <DisplayInfo choices={choices}/>
    </div>
  );
}

function DisplayInfo(props) {

  let temp;
  if (props.choices === 'Fullname') {
    temp = <h2>John Doe</h2>;
  } else if (props.choices === 'Age') {
    temp = <h2>30</h2>;
  } else if (props.choices === 'Picture') {
    temp = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    temp = <p>Please select an option.</p>;
  }

  return (
    <div>
      {temp}
    </div>
  );
}

export default App;
