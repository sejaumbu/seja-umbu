import React from 'react'
import LadoEsquerdoRegistro from "../../components/telasLogin/LadoEsquerdoRegistro"
import ConteudoDireito1 from '../../components/telaRegistro1/telaRegistro1'
import "./telaRegistro1.css"
function TelaRegistro1() {
  return (
    <div className='conteudoRegistro1'>
      <div className="login">
        <LadoEsquerdoRegistro/>
        <ConteudoDireito1/>
      </div>  
    </div>
  )
}

export default TelaRegistro1
