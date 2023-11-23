import React from 'react'
import { IoStar } from "react-icons/io5";
import "./avaliacoesCliente.css"


function AvaliacoesCliente({ fotoJard, nomeAvaliacao, descricaoAvaliacao, descricaoTipoUsuario }) {
    return (
        <div>
            <div className="cardAvaliacao">

                <div className="cardInformacoes">
                    <img src={fotoJard} />
                    <h3>{nomeAvaliacao}</h3>
                    <p>{descricaoTipoUsuario}</p>
                    <div className="estrelas">
                        <span className="estrelaUnica"><IoStar /></span>
                        <span className="estrelaUnica"><IoStar /></span>
                        <span className="estrelaUnica"><IoStar /></span>
                        <span className="estrelaUnica"><IoStar /></span>
                        <span className="estrelaUnica"><IoStar /></span>
                    </div>
                    <div className="cardFundo">
                    <p>{descricaoAvaliacao}</p>
                </div>

                </div>
               
            </div>
        </div>
    )
}

export default AvaliacoesCliente