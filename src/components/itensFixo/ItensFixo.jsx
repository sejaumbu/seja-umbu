import React from 'react'
import './itensFixo.css'

function ItensFixo({ funcao }) {
  return (
    <div>
    <div className="itensFixo">
        <div className="opcoes">
            <p onClick={() => funcao()} className='pOpcoes'>Portfólio</p>
            <p onClick={() => funcao()} className='pOpcoes'>Avaliações</p>
        </div>
        <hr />
    </div>
</div>
  )
}

export default ItensFixo