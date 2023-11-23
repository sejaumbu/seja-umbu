import React from "react";
import "./identidadeVisual.css";
import ImagemFolhaEsquerda from "../../assets/imgFolhaEsquerda.svg";
import ImagemLogoUmbu from "../../assets/imgLogoUmbu.svg";
import ImagemFolhaDireita from "../../assets/imgFolhaDireita.svg";

function LogoUmbu() {
  return (
    <div>
      <div className="imgLateralEsquerda">
        <img src={ImagemFolhaEsquerda} alt="Imagem Folha Esquerda" />
      </div>
      <div className="imgLogo">
        <img src={ImagemLogoUmbu} alt="Imagem Logo Umbu" />
      </div>
      <div className="imgLateralDireita">
        <img src={ImagemFolhaDireita} alt="Imagem Folha Direita" />
      </div>
    </div>
  );
}

export default LogoUmbu;
