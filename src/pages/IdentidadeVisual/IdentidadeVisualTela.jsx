import React from 'react'
import "./identidadeVisual.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import folhagemEsquerda from "../../assets/usadosIdentidade/imgFolhaEsquerda.svg"
import folhagemDireita from "../../assets/usadosIdentidade/imgFolhaDireita.svg"
import logoUmbu from "../../assets/usadosIdentidade/imgLogoUmbu"

function IdentidadeVisualTela() {
    return (
        <div>
            <Header></Header>
            <div className="componenteIdentidade">
                <div className="tituloPage">
                    <h2>Nossa Identidade Visual</h2>
                </div>
                <div className="folhagens">
                    <img src={folhagemEsquerda} alt="folhagem esquerda" />
                    <img src={logoUmbu} alt="simbolo UMBU" />
                    <img src={folhagemDireita} alt="folhagem direita " />
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default IdentidadeVisualTela
