import React from 'react'
import "../perfilSuperior/perfilSuperior.css"
import { IoStar } from "react-icons/io5";
import fotoJar from "../../assets/jardineiroFoto.png"


function PerfilSuperior({ nota }) {
  return (
    
    <div className="cardPerfil">

      <div className="cardFundo"> </div>

      <div className="cardPrincipalConteudo">
        <aside className="fotoCardPerfil">
          <img src={fotoJar}></img>
        </aside>
        <div className="conteudoPrincipal">

          <div className="meioConteudo">

            <div className="parteCimaConteudo">
                <h4 className="cardTexto" >José Ferreira</h4>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <p className='nota'><strong>{nota}</strong></p>
            </div>
            <div className="habilidadesConjunto">
              <p className="habilidades">Plantio</p>
              <p className="habilidades">Poda</p>
              <p className="habilidades">Manutenção</p>
              <p className="verMaisPerfil">Ver mais...</p>
            </div>

          </div>



          <div className="conteudoLadoDireito">
            <button>Contrate</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default PerfilSuperior
