import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./botao.css"

export default function Botao(props) {

  // const navigate = useNavigate();
  // const divClicavel = () => navigate(`${props.path}`);
  // dentro da div onclick={divClicavel}

  return (
    <div className="botaoCompleto">
      <aside>
        <span className='iconeTipoConta'>{props.icone}</span>
      </aside>
      <div className="descricaoTexto">
        <h4>{props.conta}</h4>
        <p>{props.descricao}</p>
      </div>
      <div className="simboloAvancar">
        <span className='avanca'>{props.avanca}</span>

      </div>
    </div>




  )
}
