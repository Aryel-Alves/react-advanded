import React, {  useState } from 'react'

import logo from '../../logo.svg'

const LoginPage = () => {
  // useCallback memoriza a função criada evitando re render em componente filhos desnecessariamente
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={user.username} name="username" onChange={changeUsername}/>
        <input type="pass" value={user.password} name="password" onChange={changePassword}/>
        <button onClick={handleClickLogin}>LOGIN</button>
      </header>
    </div>
  )
}

export default LoginPage