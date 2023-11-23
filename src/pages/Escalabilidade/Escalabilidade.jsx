import React from 'react'
import "./Escalabilidade.css"
import escalabilidade1 from "../../assets/escalabilidade1.svg"
import escalabilidade2 from "../../assets/escalabilidade2.svg"
import escalabilidade3 from "../../assets/escalabilidade3.svg"

function Escalabilidade(props) {
    return (
        <div>
            <h2 className="titulo">Futuro da UMBU</h2>
            <div className="box1">
                <img className='imgAreasComuns' src={escalabilidade1} />
                <div className='text'>
                    <p className='TextMaior'>  Áreas verdes mais comuns na cidade</p>
                    <p className='TextMenor'> Investir em áreas carentes de espaços verdes e locais de convivência. Nosso objetivo é tornar áreas verdes mais comuns na cidade, impactando positivamente não apenas os lugares, mas também a vida das pessoas ao nosso redor.  </p>
                </div>
            </div>
            <div className="box2">
                <div className='text2'>
                    <p className='TextMaior2'>  Versão mobile UMBU</p>
                    <p className='TextMenor2'>Estamos desenvolvendo uma versão mobile da UMBU para tornar a plataforma mais acessível aos jardineiros. Além disso, estamos implementando uma vitrine para lojas de jardinagem, permitindo que anunciem seus produtos mediante uma mensalidade simbólica. Isso facilitará aos jardineiros encontrar equipamentos de qualidade e proporcionará maior visibilidade aos negócios do setor. </p>
                </div>
                <img className="imgMobile" src={escalabilidade2} />
            </div>
            <div className="box3">
                <img className="imgUMshop" src={escalabilidade3} />
                <div className='text3'>
                    <p className='TextMaior3'> Vitrine para lojas de jardinagem</p>
                    <p className='TextMenor3'>Permitindo que anunciem seus produtos mediante uma mensalidade simbólica. Isso facilitará aos jardineiros encontrar equipamentos de qualidade e proporcionará maior visibilidade aos negócios do setor.</p>
                </div>
            </div>

        </div>
    )
}

export default Escalabilidade