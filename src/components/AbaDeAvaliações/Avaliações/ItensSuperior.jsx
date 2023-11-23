import React from 'react'


function ItensSuperior(props) {
    return (
        <div>
            <div className="itensFixo">
                <div className="opcoes">
                    <p className='pOpcoes'>Portfólio</p>
                    <p className='pOpcoes'>Avaliações</p>
                </div>
                <hr />
            </div>
            <h4 className='reviews'>All Reviews ({props.reviews})</h4>
        </div>
    )
}


export default ItensSuperior