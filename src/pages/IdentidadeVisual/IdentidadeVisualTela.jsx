import React from 'react'
import "./identidade.css";
import folhaDireita from "../../assets/usadosIdentidade/folhaDireita.png";
import folhaEsquerda from "../../assets/usadosIdentidade/folhaEsquerda.png";
import ItensSomados from "../../assets/usadosIdentidade/ItensSomados.png";
import logoCentral from "../../assets/usadosIdentidade/logoCentral.png";
import logoUmbu from "../../assets/usadosIdentidade/LogoUMBU.png";
import Aplicacao from "../../assets/usadosIdentidade/AplicacaoVisual.jpg";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { PiPlantFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";

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

                <div className="paletaDeCores">
                    <div>
                        <h2 className="tituloP">Paleta de Cores </h2>
                        <p className="sub">Matizes representativos da marca </p>
                        <div className="folhagens">
                            <div className="corHex" id='corPrimaria'>
                                <span className='folhagemItem1'><RiPlantFill /></span>
                                <p>#00572E</p>
                            </div>
                            <div className="corHex" id='corSecundaria'>
                                <span className='folhagemItem2' ><RiPlantFill /></span>
                                <p>#006845</p>
                            </div>
                            <div className="corHex" id='corTercearia'>
                                <span className='folhagemItem3' ><RiPlantFill /></span>
                                <p>#2E7F60</p>
                            </div>
                            <div className="corHex" id="corQuarta">
                                <span className='folhagemItem4' ><RiPlantFill /></span>
                                <p>#51C601</p>
                            </div>


                        </div>
                    </div>

                    <div className="imgPaleta"></div>
                </div>

                <div className="fontes">

                    <h2 className="titutoF">Fontes Utilizadas </h2>
                    <p className="subF">Formas de fonte para comunicar a mensagem </p>

                    <div className="fontesMontserrat">

                        <div className='FontEs'>
                            <h2 className="titulo1">CANTORA ONE BOLD</h2>
                            <p className="sub1">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 ! @#$%^&amp;*()</p>


                            <h2 className="titulo2">CANTORA ONE</h2>
                            <p className="sub2">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 ! @#$%^&amp;*()</p>


                            <h2 className="titulo3">GUIA DE FONTE</h2>
                            <p className="sub3">Combinação e dimensionamento adequados</p>
                        </div>

                        <div className='parte2'>
                            <h2 className="titulo4">Montserrat</h2>
                            <h3 className="sub4">SUBTÍTULO</h3>
                            <div className="paragrafo">
                                <p>
                                    UMBU Cria: Nossa Jornada Além do Verde - Acreditamos que os jardins são mais do que apenas espaços verdes; são promotores de qualidade de vida e bem-estar. Comprometidos com a responsabilidade social e ambiental, destinamos parte do nosso faturamento para projetos inovadores de criação e revitalização de áreas verdes em comunidades carentes.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="desenvolvimentoLogo">
                    <h2 className="tituloD">Desenvolvimento da Logo</h2>
                    <p className="Titulosub">Comunicando a natureza e a paixão pela jardinagem</p>

                    <div className="imgFormandoLogo">
                        <img className="logoI" src={ItensSomados} alt="Icones que formam a logo da umbu" />
                        <img className="logoU" src={logoUmbu} alt="Logo da umbu" />
                    </div>
                    {/* <<<<<<=========>>>>>>> */}
                </div>
                </div>

               


                <div className="aplicacaoElementoVisual">
                    <div>
                        <p className="titulos">APLICAÇÕES DE ELEMENTO VISUAL</p>
                        <p className="subTitulo">Matizes representativos da marca</p>
                    </div>
                    <div className='espaçamentoCima'>
                        <img className="finalPagina" src={Aplicacao} alt="Aplicação elemento visual." />
                    </div>
                </div>

            </div>

            <Footer />


        </div>
    )
}

export default IdentidadeVisualTela
