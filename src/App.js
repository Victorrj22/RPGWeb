import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import "./App.css";
import "./style.scss";
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
