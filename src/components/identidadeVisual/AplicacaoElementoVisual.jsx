import React from "react";
import "./identidadeVisual.css";
import AplicacaoVisual from "../../assets/aplicacaoElementoVisual.svg";

function AplicacaoElementoVisual() {
  return (
    <div>
      <header>
        <p className="titulos">APLICAÇÕES DE ELEMENTO VISUAL</p>
        <p className="subTitulo">Matizes representativos da marca</p>
      </header>
      <img src={AplicacaoVisual} alt="Aplicação elemento visual" />
    </div>
  );
}

export default AplicacaoElementoVisual;
