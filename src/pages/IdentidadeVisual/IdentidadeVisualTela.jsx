import React from "react";
import "./identidadeVisual.css";
import ImagemFolhaEsquerda from "../../assets/imgFolhaEsquerda.svg";
import ImagemLogoUmbu from "../../assets/imgLogoUmbu.svg";
import ImagemFolhaDireita from "../../assets/imgFolhaDireita.svg";
import ImagemItensSomando from "../../assets/itensSomando.svg";
import ImagemLogoUmbuPazinha from "../../assets/imgLogoUmbuPazinha.svg";
import PaletaDeCores from "../../../src/assets/paleta-cores.svg";
import AplicacaoVisual from "../../assets/aplicacaoElementoVisual.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function IdentidadeVisualTela() {
  return (
    <div>
      <Header></Header>
      <div className="componenteIdentidade">
        <div className="tituloIdentidade">
          <p className="titleV">Nossa Identidade Visual</p>
        </div>
        <div className="logoUmbu">
          <div className="imgLateral">
            <img src={ImagemFolhaEsquerda} alt="Imagem Folha Esquerda" />
          </div>
          <div className="imgLogo">
            <img src={ImagemLogoUmbu} alt="Imagem Logo Umbu" />
          </div>
          <div className="imgLateral">
            <img src={ImagemFolhaDireita} alt="Imagem Folha Direita" />
          </div>
        </div>
        <div className="desenvolvimentoLogo">
          <div>
            <p className="titulos">Desenvolvimento da Logo</p>
            <p className="subTitulo">
              Comunicando a natureza e a paixão pela jardinagem
            </p>
          </div>
          <div className="imgFormandoLogo">
            <img
              src={ImagemItensSomando}
              alt="Icones que formam a logo da umbu"
            />
            <img src={ImagemLogoUmbuPazinha} alt="Logo da umbu" />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="paletaDeCores">
          <div>
            <p className="titulos">Paleta de Cores</p>
            <p className="subTitulo">Matizes representativos da marca</p>
          </div>
          <div className="imgPaleta">
            <img className="paletaDeCoresFoto" src={PaletaDeCores} alt="" />
          </div>
        </div>

        <br />
        <br />

        <div className="fontes">
          <div>
            <p className="titulos">Fonte Utilizada</p>
            <p className="subTitulo">
              Formas de fonte para comunicar a mensagem
            </p>

            <br />
            <br />
            <br />

            <div className="fontesCantoraOne">
              <p className="fonteTitleC">CANTORA ONE</p>
              <p className="fonteSubtituloC">SUBTÍTULO</p>
              <p className="fonteParagrafoC">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu.
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="fontesMontserrat">
              <p className="fonteTitleM">MONTSERRAT</p>
              <p className="fonteSubtituloM">SUBTÍTULO</p>
              <p className="fonteParagrafoM">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="aplicacaoElementoVisual">
          <div>
            <p className="titulos">APLICAÇÕES DE ELEMENTO VISUAL</p>
            <p className="subTitulo">Matizes representativos da marca</p>
          </div>
          <img src={AplicacaoVisual} alt="Aplicação elemento visual." />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default IdentidadeVisualTela;
