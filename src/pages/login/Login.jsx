import React from 'react'
import LadoEsquerdoRegistro from "../../components/telasRegistro/swiperRegistro/SwiperRegistro"
import "./login.css";
import TelaLogin from '../../components/telaLogin/TelaLogin';

export default function Login() {
  return (
    <div className='conteudoLogin'>
      <div className="login">
        <LadoEsquerdoRegistro/>
        <TelaLogin/>
      </div>  
    </div>
  )
}

