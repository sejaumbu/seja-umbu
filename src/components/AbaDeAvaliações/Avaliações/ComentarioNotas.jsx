import React from 'react'
import '../AbaDeAvaliacoes.css'


function ComentarioNotas(props) {
    return (
        <div>
            <div className='avaliacao'>
                <img className='imgPerfilPerfil' src={props.imgPerfil} />
                <div className='box'>
                    <div className='nomeContratante'>
                        {props.nomeContratante}
                    </div>
                        <div className="notaData">
                            <span>{props.nota1}</span>
                            <span> {props.nota2}</span>
                            <span>{props.nota3}</span>
                            <span> {props.nota4}</span>
                            <span> {props.nota5}</span>
                            <span className='data'>{props.data}</span>
                        </div>                    
                    <div className='comentario'>
                        {props.comentario}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ComentarioNotas