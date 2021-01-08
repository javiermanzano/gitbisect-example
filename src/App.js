import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" onChange={(e) => setText(e?.target?.value)}/>
        <span>Text should be.... {text}</span>
      </header>
    </div>
  );
}

export default App;
