import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


const Login = () => {
  return (
      <div className= 'FormsContainer'>
          <div className= 'FormsWrapper'>
              <span className="logo">RPGWeb</span>
              <span className="titulo">Login</span>
              <form>
                  <input type="email" placeholder='e-mail' />
                  <input type="password" placeholder='senha' />
                  <Link to="/home"><button>Entrar</button></Link>
              </form>
              <p className='linkregistro'>Ainda não tem uma conta? <Link to="/register">Registre-se</Link></p>

               
          </div>
      </div>     
  )
}

export default Login