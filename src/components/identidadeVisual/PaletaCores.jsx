import React from "react";
import "./identidadeVisual.css";
import PaletaDeCores from "../../../src/assets/paleta-cores.svg";

function PaletaCores() {
  return (
    <div>
      <header>
        <p className="titulos">PALETA DE CORES</p>
        <p className="subTitulo">Matizes representativos da marca</p>
      </header>
      <img src={PaletaDeCores} alt="" />
    </div>
  );
}

export default PaletaCores;
