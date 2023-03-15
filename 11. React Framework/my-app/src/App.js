import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let message = "Hello. I am a React app!";
  const [userName, setName] = useState('');
  const [userAge, setAge] = useState('');
  const [showAgeInput, setShowAgeInput] = useState(false);

  const readUserName = () => {
    setShowAgeInput(true);
  }

  const register = () => {
    alert(`Registration OK ${userName}, ${userAge}`);
  }

  return (
    <div className="App">
      {message}
      <hr/>
      <label>
        What is your name?
        <input 
          value={userName} 
          onInput={(event) => {setName(event.target.value)}}
        />
      </label>
      <br/>
      
      {
        userName!== '' && 
        <>
          <div>
            Hello, {userName}!
          </div>
          <button onClick = {() => {readUserName()}}>Continue</button>
        </>
      }
      <br/>
      {
      showAgeInput && <label>
        What is your age?
        <input 
          type={'number'}
          value={userAge} 
          onInput={(event) => {setAge(event.target.value)}}
        />
      </label>
      }
      <br/>
      {
        (userName!== '' && userAge > 0) && 
        <>
          <button onClick = {() => {register()}}>Register</button>
        </>
      }
    </div>
  );
}

export default App;
