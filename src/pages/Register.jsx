import React from 'react';
import Login from './Login';
import Add from "../img/Avatar.png";
import {Link, Route, Routes} from 'react-router-dom';

const Register = () => {  {/*Atalho para esqueleto: 'rafce'*/}
  return (
      <div className='FormsContainer'>  {/*Separação dos containers*/}
          <div className='FormsWrapper'>  {/*Separação dos containers*/}
              <span className="logo">RPGWeb</span>  {/*Nome App*/}
              <span className="titulo">Registro</span>  {/*Título da página*/}
              <form>
                  <input type="text" placeholder='usuário' />  {/*Caixa de input*/}
                  <input type="email" placeholder='e-mail' />  {/*Caixa de input*/}
                  <input type="password" placeholder='senha'/> {/*Caixa de input*/}
                  <input style={{display:"none"}} type="file" id="avatar"/> {/*Caixa de anexo*/}
                  <label htmlFor="avatar">
                    <img src={Add} alt="" />
                    <span>Adicione seu Personagem</span>
                  
                  </label>
                  <button>Inscrever-se</button> {/*Botão de inscrever*/}
              </form>
              <p>Já tem uma conta? <Link to="/">Login</Link> </p>
          </div>
      </div>
  )
}

export default Register