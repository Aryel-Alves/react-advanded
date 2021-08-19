import React , {useCallback, useState} from 'react';
import logo from './logo.svg';
import { Header } from './components/header'
import './App.css';
import PostList from './components/post-list';

function App() { 
  // useCallback memoriza a função criada evitando re render em componente filhos desnecessariamente
  const onLogin = useCallback(() => console.log("click login"), [])
  const onLogout = useCallback(() => setUser({ username: '', password: '' }), [])
  const onCreateAccount = () => console.log("click onCreateAccount")
  const [user, setUser] = useState({ username: '', password: '' })

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value
    setUser({...user, username}) 
  }

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    setUser({...user, password}) 
  }

  const handleClickLogin = () => {
    console.log(user)
  }

  return (
    <div className="App">
      <Header 
        user={user} 
        onLogin={onLogin} 
        onLogout={onLogout} 
        onCreateAccount={onCreateAccount} 
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={user.username} name="username" onChange={changeUsername}/>
        <input type="pass" value={user.password} name="password" onChange={changePassword}/>
        <button onClick={handleClickLogin}>LOGIN</button>
      </header>

      <PostList></PostList>
    </div>
  );
}

export default App;
