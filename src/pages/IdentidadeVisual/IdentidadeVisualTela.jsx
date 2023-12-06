import React from 'react'
import "./identidade.css";
import folhaDireita from"../../assets/usadosIdentidade/folhaDireita.png";
import folhaEsquerda from "../../assets/usadosIdentidade/folhaEsquerda.png";
import ItensSomados from "../../assets/usadosIdentidade/ItensSomados.png";
import logoCentral from "../../assets/usadosIdentidade/logoCentral.png";
import logoUmbu from "../../assets/usadosIdentidade/LogoUMBU.png";
import Aplicacao from "../../assets/usadosIdentidade/AplicacaoVisual.jpg";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

function IdentidadeVisualTela() {
    return (
        <div>
            <Header></Header>
            <div className="componenteIdentidade">
                <div className="tituloIdentidade">
                    <p className="titleV">Nossa Identidade Visual</p>
                </div>

                <div className='fundo'>  
                    <div className="logoUmbu">
                        <div className="imgLateral">
                            <img src={folhaEsquerda} alt="Imagem Folha Esquerda" />
                        </div>
                        <div className="imgLogo">
                            <img src={logoCentral} alt="Imagem Logo Umbu" />
                        </div>
                        <div className="imgLateral">
                            <img src={folhaDireita} alt="Imagem Folha Direita" />
                        </div>
                    </div>
                </div>


                <div className="desenvolvimentoLogo">
                    
                    <div className="text1">DESENVOLVIMENTO DA LOGO </div>
                    <div className="Textsub">Comunicando a natureza e a paixão pela jardinagem </div>
                    
                    <div className="imgFormandoLogo">
                        <img className="logoI" src={ItensSomados} alt="Icones que formam a logo da umbu" />
                        <img className="logoU"src={logoUmbu} alt="Logo da umbu" />
                    </div>

                </div>

                
                <div className="paletaDeCores">
                    <div>
                        <div className="TituloP">Paleta de Cores </div>
                        <div className="sub">Matizes representativos da marca </div>
                    </div>


                    <div className="imgPaleta">
                        
                    </div>


                </div>

                <div className="fontes">
                    <div>
                        <p className="titulos">Fonte Utilizada</p>
                        <p className="subTitulo">Formas de fonte para comunicar a mensagem</p>
                        <div className="fontesMontserrat">
                            <p className="fonteTitleM">MONTSERRAT</p>
                            <p className="fonteSubtituloM">SUBTÍTULO</p>
                            <p className="fonteParagrafoM">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="aplicacaoElementoVisual">
                    <div>
                        <p className="titulos">APLICAÇÕES DE ELEMENTO VISUAL</p>
                        <p className="subTitulo">Matizes representativos da marca</p>
                    </div>
                    <img src={Aplicacao} alt="Aplicação elemento visual." />
                </div>

            </div>

            <Footer />


        </div>
    )
}

export default IdentidadeVisualTela
