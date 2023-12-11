import React from 'react'
import "./cardCompleto.css"


function CardBlog({ image, tituloMateria, dataPublicacao, descricao, materia }) {
    return (
        <div>
            <div className="cardCompleto">
                <div className="cardImagem">
                    <img src={image} alt="" className="imagem" />
                </div>
                <div className="restanteCard">
                    <h2 className="tituloMateria" >{tituloMateria}</h2>
                    <p className="dataPublicacao" >{dataPublicacao}</p>
                    <p className="descricaoCard" >{descricao}</p>
                    <button className="botaoClica" onClick={materia}>Leia sobre</button>
                </div>

            </div>
        </div>
    )
}

export default CardBlog
