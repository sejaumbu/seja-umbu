import React from 'react'
import './opcoes.css'

function Opcoes() {
    return (
        <div>
            <div className="itensFixo1">
                <div>
                    <h2 className='notificacoes1'> Notificações </h2>
                </div>
                <div className="opcoes1">
                    <p className='pOpcoes1'>Recentes</p>
                    <p className='pOpcoes1'>Pedidos</p>
                    <p className='pOpcoes1'>Avaliações</p>
                </div>
            </div>
        </div>
    )
}

export default Opcoes