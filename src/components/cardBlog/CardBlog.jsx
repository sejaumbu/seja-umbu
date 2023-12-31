import React from 'react'
import "./cardCompleto.css"
import { useNavigate } from 'react-router-dom'


function CardBlog({ image, tituloMateria, dataPublicacao, descricao, materia }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="cardCompleto">
                <div className="cardImagem">
                    <img src={image} alt="" className="imagem" />
                    <h2 className="tituloMateria" >{tituloMateria}</h2>
                    <p className="dataPublicacao" >{dataPublicacao}</p>
                    <p className="descricaoCard" >{descricao}</p>
                </div>
                <div className="restanteCard">
                    <button className="botaoClica" onClick={() => navigate(materia)}>Saiba mais</button>
                </div>
            </div>
        </div>
    )
}

export default CardBlog
