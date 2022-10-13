import React from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';
import {useEffect} from 'react';
import {useState} from 'react'
import cookie from 'react-cookies'


function Game() {
    const navigate=useNavigate();
    const [data_use,setdata]=useState([])
    const [length,setlength]=useState(0);
    const searchInput = React.useRef()
const state={apiResponse:"",guessword:""};
function callAPI() {
  fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => state.apiResponse=res );
}

function hop(){
    navigate('/score');
}

useEffect(() => { 
    callAPI();
    console.log(cookie.load("token"));
    if(cookie.load("token")==undefined)
        window.location.href="http://localhost:3001/"
  });
function save_score(score){
  
    fetch('http://localhost:4000/data',{
      method:"post",
      headers:{
         "Content-Type":"application/json"
          },
      body:JSON.stringify({
             username:cookie.load("token"),
             score:score
         }) 
   }).then(res=>res.json()).then(data=>{
    console.log(data)
   })
  
}
function callAPI_word(word){
  fetch("http://localhost:9000/testAPI/word?guess="+word)
  .then(res=>res.text())
  .then(res=>{
    console.log(res);
    if(res==="correct!"||length>=6)
    {  if(res==="correct!"){
      console.log(length)
      save_score(7-length);
    }
      setdata([]);
    setlength(0);
    searchInput.current.value ='';
  
  }
    else{
    resultProcessor(res)}
    state.guessword='';
  })
}
function handleChange(event) {
   
  state.guessword=event.target.value;
  console.log(state.guessword);
}

function handleSubmit(event) {
  event.preventDefault();
  if(state.guessword.length===7)
  callAPI_word(state.guessword)
  else{
  alert("length not right!\n7 letters required!")
  state.guessword='';
}
}

function resultProcessor(word){
    
    console.log(data_use);
  var wordlist=word.split(" ")
  wordlist.pop()
  let letters=[]
  for(let i=0;i<wordlist.length;i++){
    if(wordlist[i]==="#")
    letters.push({text:wordlist[i],style:"Word-color-red"})
    else{
      if(wordlist[i]==="*")
      letters.push({text:wordlist[i],style:"Word-color-orange"})
      else
      letters.push({text:wordlist[i],style:"Word-color-green"})
    }
  }
  data_use.push(letters);
  setdata(data_use);
  setlength(data_use.length);
  console.log(data_use);
}
return(
    <div className="App">
    <header className="App-header">
      <div className='App-title'>
      <h2>Word Guessing</h2>
      <button onClick={hop}>Rank</button>
    <form onSubmit={handleSubmit}>
            <input ref={searchInput} className='App-input' type="text" onChange={handleChange} />
          <input className='App-input' type="submit" value="Submit" />
        </form>
        </div>
      <div className='App-content'>{data_use.map((item,idx)=>(
        <div key={idx} className='display-flex'>{item.map((letter,index)=>(
          <div Key={index} className={letter.style}>{letter.text}</div>
        ))}</div>
      ))}</div>    
     
      <p className='App-intro'>{state.apiResponse}</p>
  
    </header>
  </div>);}




export default Game;
