import React from 'react'
import './app.css';
function Auth(){


return(
    <div className="App">
    <header className="App-header">
      <div className='App-title'>
      <h2>Login</h2>
      </div>
      <div className='App-content'>
    <form method="POST" action="http://localhost:8000/auth/login">
            <label>Username</label>
            <input  className='App-input' type="text" name="username" />
            <label>Password</label>
            <input  className='App-input' type="text" name="password" />
          <input className='App-input' type="submit" value="Submit"  />
        </form>
        </div>
    </header>
  </div>);
}

export default Auth;