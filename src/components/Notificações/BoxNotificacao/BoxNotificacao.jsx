import React from 'react'
import notificacoes from "../../../pages/Notificacoes/Notificacoes.css"
import { useNavigate } from 'react-router-dom';

function BoxNotificacao(props) {
    const navigate = useNavigate();
    
    
    return (
        <div>
            <div className='notificacao'>
                <img className='imgPerfil' alt='test' src={props.imgPerfil} />
                <div className='box'>
                    <div className='nomeContratante'>
                        {props.nomeContratante}
                    </div>
                    {/* <div className="nota">
                       <span>{props.nota1}</span> 
                       <span> {props.nota2}</span> 
                       <span>{props.nota3}</span> 
                       <span> {props.nota4}</span> 
                       <span> {props.nota5}</span> 
                    </div> */}
                    <div className='comentario'>
                        {props.comentario}
                    </div>
                    <div className='data'>
                        {props.data}
                    </div>
                    <div id="botaoAlinhamento">
                        <button id='botaoContinue' onClick={ () => navigate('/chat')}>Continue</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BoxNotificacao