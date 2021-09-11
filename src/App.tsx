import React , {useCallback, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from './components/header'
import './App.css';
import PostList from './components/post-list';
import LoginPage from './pages/login/login';
import CameraPage from './pages/camera/camera';

function App() { 
  // useCallback memoriza a função criada evitando re render em componente filhos desnecessariamente
  const onLogin = useCallback(() => console.log("click login"), [])
  const onLogout = useCallback(() => setUser({ username: '', password: '' }), [])
  const onCreateAccount = () => console.log("click onCreateAccount")
  const [user, setUser] = useState({ username: '', password: '' })

  return (
    <Router>
      <div className="App">
        <Header 
          user={user} 
          onLogin={onLogin} 
          onLogout={onLogout} 
          onCreateAccount={onCreateAccount} 
        />
        <Switch>
          <Route path="/" exact component={CameraPage} />
          <Route path="/post-list" component={PostList} />
          <Route path="/login" component={LoginPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
