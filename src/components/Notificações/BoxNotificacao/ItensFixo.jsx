import React from 'react'
import notificacoes from "../../../pages/Notificacoes/Notificacoes.css"

function ItensFixo() {
    return (
        <div>
            <div className="itensFixo">
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

export default ItensFixo