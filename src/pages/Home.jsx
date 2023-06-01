import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Siderbar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Siderbar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home