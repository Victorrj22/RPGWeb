import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import "./style.scss";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
