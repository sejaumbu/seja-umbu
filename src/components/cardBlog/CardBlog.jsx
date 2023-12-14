import React from 'react'
import "./cardCompleto.css"
import { useNavigate } from 'react-router-dom'


function CardBlog({ image, tituloMateria, dataPublicacao, descricao, materia }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="cardCompleto">
                <img src={image} alt=""/>
                <h2 className="tituloMateria" >{tituloMateria}</h2>
                <p className="dataPublicacao" >{dataPublicacao}</p>
                <p className="descricaoCard" >{descricao}</p>
                <button className="botaoClica" onClick={materia}>Leia sobre</button>
            </div>
        </div>
    )
}

export default CardBlog
