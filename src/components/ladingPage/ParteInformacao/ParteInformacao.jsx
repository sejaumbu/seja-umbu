import React from 'react'
import fotoJardS from "../../../assets/fundoJardinagem.svg"
import "../ParteInformacao/parteInformacao.css"
import fotoJardI from "../../../assets/jardineiraPNGOUT.png"


function ParteInformacao() {
    return (
        <div className="conteudoInteiro">
            <div className="informacaoSuperior">
                <aside><img className='imagemJardinagemSuperior' src={fotoJardS} /></aside>
                <div className='parteTextoLanding'>
                    <h2 className='tituloSuperior'> Seu Jardim, Nossa Missão</h2>
                    <p className='paragrafoSuperior'>Na Umbu, somos a ponte que conecta apaixonados jardineiros(a) às necessidades específicas dos contratantes. Se você é apaixonado por transformar espaços e está pronto para elevar suas habilidades a novos patamares, a Umbu é o lugar ideal para você encontrar oportunidades de trabalho gratificantes.</p>
                </div>
            </div>
            <div className="informacaoInferior">
                <aside><img className='imagemJardinagemInferior' src={fotoJardI} /></aside>
                <div className='parteTextoLandingInferior'>
                    <h2 className='tituloInferior'> Por que se juntar à Umbu?</h2>
                    <p className='paragrafoInferior'>Na Umbu, somos a ponte que conecta apaixonados jardineiros(a) às necessidades específicas dos contratantes. Se você é apaixonado por transformar espaços e está pronto para elevar suas habilidades a novos patamares, a Umbu é o lugar ideal para você encontrar oportunidades de trabalho gratificantes.</p>
                </div>
            </div>
        </div>

    )
}

export default ParteInformacao
