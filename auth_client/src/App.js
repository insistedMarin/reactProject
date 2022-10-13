import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './login';



function App(){
  return <Routes>
    <Route path='/' element={<Auth/>}>
    </Route>
  </Routes>
}

export default App;

