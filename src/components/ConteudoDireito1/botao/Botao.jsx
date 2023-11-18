import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./botao.css"

export default function Botao(props) {
  
  // const navigate = useNavigate();
  // const divClicavel = () => navigate(`${props.path}`);
  // dentro da div onclick={divClicavel}

  return (  
    <div className="conteudoInteiro" >
      <div className='botaoTipoConta'>
            <div className='iconesTipoConta'>
              <span>{props.icone}</span>
              <p>{props.conta}</p>
            </div>
            <div className="descricao">
              <p>{props.descricao}</p>
              <span className='avanca'>{props.avanca}</span>
            </div>
      </div>
    </div>


  )
}
