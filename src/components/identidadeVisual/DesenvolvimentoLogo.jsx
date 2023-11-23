import React from "react";
import "./identidadeVisual.css";
import ImagemItensSomando from "../../assets/itensSomando.svg";
import ImagemLogoUmbuPazinha from "../../assets/imgLogoUmbuPazinha.svg";

function DesenvolvimentoLogo() {
  return (
    <div>
      <header>
        <p className="titulos">DESENVOLVIMENTO DA LOGO</p>
        <p className="subTitulo">
          Comunicando a natureza e a paixão pela jardinagem
        </p>
      </header>
      <div className="imgFormandoLogo">
        <img src={ImagemItensSomando} alt="Icones que formam a logo da umbu" />
        <img src={ImagemLogoUmbuPazinha} alt="Logo da umbu" />
      </div>
    </div>
  );
}

export default DesenvolvimentoLogo;
