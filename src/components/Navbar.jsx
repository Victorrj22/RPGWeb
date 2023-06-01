import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>RPGWeb</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
            <span>Victor</span>
            <Link to={'/'}><button>Sair</button></Link>
        </div>
    </div>
  )
}

export default Navbar