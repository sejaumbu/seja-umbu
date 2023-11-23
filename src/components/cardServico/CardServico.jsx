import React from 'react'
import "./cardServico.css"

function CardServico({servico, descricao, iconeCard}) {
  return (
    <div>
      <div className="CardServico">
        <span className='iconesServicos'>{iconeCard} </span>
        <h3 className='servicoTitulo'>{servico}</h3>
        <p className='descricaoTitulo'>{descricao}</p>
      </div>
    </div>
      
  )
}

export default CardServico;

      