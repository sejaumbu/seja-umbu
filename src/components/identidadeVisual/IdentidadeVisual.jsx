import React from "react";
import Titulo from "./Titulo";
import LogoUmbu from "./LogoUmbu";
import PaletaCores from "./PaletaCores";
import FontesUso from "./FontesUso";
import DesenvolvimentoLogo from "./DesenvolvimentoLogo";
import "./identidadeVisual.css";
import AplicacaoElementoVisual from "./AplicacaoElementoVisual";

function IdentidadeVisual() {
  return (
    <div>
      <Titulo />
      <LogoUmbu />
      <DesenvolvimentoLogo />
      <PaletaCores />
      <FontesUso />
      <AplicacaoElementoVisual />
    </div>
  );
}

export default IdentidadeVisual;
