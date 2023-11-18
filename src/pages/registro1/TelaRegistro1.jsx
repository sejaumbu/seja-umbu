import React from 'react'
import LadoEsquerdoRegistro from "../../components/telasLogin/LadoEsquerdoRegistro"
import ConteudoDireito1 from '../../components/ConteudoDireito1/ConteudoDireito1'
import "../../pages/registro1/telaRegistro1.css"
function TelaRegistro1() {
  return (
    <div className='testeRegistro'>
        <LadoEsquerdoRegistro/>
        <ConteudoDireito1/>
    </div>
  )
}

export default TelaRegistro1
