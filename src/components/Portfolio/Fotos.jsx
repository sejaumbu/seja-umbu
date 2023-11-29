import './Portfolio.css'
import React from 'react'

function Fotos(props) {
  return (
    <div className="posicaoFotos">
      <img className='imagens' src={props.foto} />
    </div>
  )
}

export default Fotos