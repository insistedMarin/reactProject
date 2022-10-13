import React from 'react'
import './app.css';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies'
function Callback()  {
    const {id}=useParams()
    const navigate=useNavigate();
  useEffect(() => { 
    cookie.save("token",id,{path:"/"})
    fetch('http://localhost:8000/auth/recive',{
        method:"post",
        headers:{
           "Content-Type":"application/json"
            },
        body:JSON.stringify({
               token:id,
           }) 
     }).then(res=>res.json()).then(data=>{
                 console.log(data)
                 if(data===true){
                 console.log("login successful")
                  navigate('/')
                }
         })
  });

    return(<div className="App">
      <header className="App-header">  
    <p>hello</p>
      </header>
  </div>)
  
}
export default Callback
