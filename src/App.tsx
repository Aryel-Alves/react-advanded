import React from 'react';
import logo from './logo.svg';
import { Header } from './components/header'
import './App.css';

function App() {
  const user = {}
  const onLogin = () => console.log("click login")
  const onLogout = () => console.log("click onLogout")
  const onCreateAccount = () => console.log("click onCreateAccount")

  return (
    <div className="App">
      <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
