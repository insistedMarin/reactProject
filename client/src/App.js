import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './components/game';
import Score from './components/score';
import Callback from './components/callback';

function App(){
  return <Routes>
    <Route path='/' element={<Game/>}>
    </Route>
    <Route path='/score' element={<Score/>}></Route>
    <Route path='/callback/:id' element={<Callback/>}></Route>
  </Routes>
}

export default App;
