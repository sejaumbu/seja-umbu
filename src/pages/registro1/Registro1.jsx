import React from 'react'
import LadoEsquerdoRegistro from "../../components/telasRegistro/swiperRegistro/SwiperRegistro"
import TelaRegistro1 from '../../components/telasRegistro/telaRegistro1/TelaRegistro1.jsx'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./registro1.css";

export default function Registro1() {
  return (
    <div className='conteudoRegistro1'>
      <div className="login">
        <LadoEsquerdoRegistro/>
        <TelaRegistro1/>
      </div>  
    </div>
  )
}

