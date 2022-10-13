import React from 'react'
import './app.css';
import {useEffect} from 'react';
function Auth(){


  useEffect(() => { 
    connect();
  });
  function connect(){
    fetch('http://localhost:8000/auth/login')
    .then(res => res.json())
    .then(res => {
      if(res===true)
      console.log("already login");
    });
  };

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8000/auth/login',{
          method:"post",
          headers:{
             "Content-Type":"application/json"
              },
          body:JSON.stringify({
                 username:'wangyang',
                 password:123456,
             }) 
       }).then(res=>res.json()).then(data=>{
                   console.log(data)
                   if(data===true)
                   console.log("login successful")
           })
      }

    
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