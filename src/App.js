import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function App() {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" onChange={(e) => setText(e?.target?.value)}/>
        <span>Text should be.... {reverseString(text)}</span>
      </header>
    </div>
  );
}

export default App;
