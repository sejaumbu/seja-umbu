import React from 'react'
import "./itensNotificacao.css"

function itensNotificacao() {
    return (
        <div>
            <div className="itensNotificacao">
                <div>
                    <h2 className='titulo'> Notificações </h2>
                </div>
                <div className="opcoes">
                    <p className='pOpcoes'>Recentes</p>
                    <p className='pOpcoes'>Pedidos</p>
                    <p className='pOpcoes'>Avaliações</p>
                </div>
            </div>
        </div>
    )
}

export default itensNotificacao;