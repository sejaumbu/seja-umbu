import React from 'react'
import "../BoxNotificacao/boxNotificacao.css"


function BoxNotificacao(props) {
    return (
        <div>
            <div className='notificacao'>
                <img className='imgPerfil' src={props.imgPerfil}/>
                <div className='box'>
                    <div className='nomeContratante'>
                        {props.nomeContratante}
                    </div>
                    <div className="nota">
                       <span>{props.nota1}</span> 
                       <span> {props.nota2}</span> 
                       <span>{props.nota3}</span> 
                       <span> {props.nota4}</span> 
                       <span> {props.nota5}</span> 
                    </div>
                    <div className='comentario'>
                        {props.comentario}
                    </div>
                    <div className='data'>
                        {props.data}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BoxNotificacao