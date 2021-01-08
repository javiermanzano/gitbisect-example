import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const reverseString = (str) => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse().reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

const App = () => {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>REVERSE YOUR FAVORITE WORD!</h1>
        <img src={logo} className="App-logo" />
        <input type="text" onChange={(e) => setText(e?.target?.value)} />
        <span style={{ marginTop: 30, color: 'cyan' }}>Reversed text is.... "{reverseString(text)}"</span>
      </header>
    </div>
  );
}

export default App;
