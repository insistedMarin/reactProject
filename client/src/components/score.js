import React from 'react'
import './app.css';
import {useEffect} from 'react';
import {useState} from 'react'
function Score()  {

  const [socre_lsit,setscore]=useState([])

  function DBC(){
    fetch("http://localhost:4000/data")
    .then(res => res.json())
    .then(res =>setscore(res));
  }

  useEffect(() => { 
    DBC();
  });



    return(<div className="App">
      <header className="App-header">
      
  
      <div className='App-title'>
        <div className='display-flex'>
          <span className='item'>No.</span>
          <span className='item'>Name</span>
          <span className='item'>Score</span>
        </div>
        </div>
      <div className='App-content'>{socre_lsit.map((item,idx)=>(
        <div key={idx} className='display-flex'>
          <span className='item'>{idx+1}</span>
          <span className='item'>{item.username}</span>
          <span className='item'>{item.point}</span>
        </div>
      ))}</div>    
      
      </header>
  </div>)
  
}
export default Score
