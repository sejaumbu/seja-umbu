import React from 'react'
import { useNavigate } from 'react-router-dom';



// Componentes
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


// Imagens 
import folhas from "../../assets/usadosPlanos/folhas.png";
import folhas2 from "../../assets/usadosPlanos/folhas2.png";
import "./plano.css";

function Planos() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="planosUmbu">
                <span className='testeGratis'>
                    <h2>TESTE NOSSA PLATAFORMA</h2>
                    <h2>POR<span className='planosTextColor'> 2 MESES GRATUITOS</span></h2>
                </span>
                <div className="umbuPremium">
                    <h3>Planos UMBU <span className='planosTextColor2'>Premium</span></h3>
                    <p>Após o período de teste, escolha o plano que melhor se adapte a você e colha os frutos de uma experiência premium.</p>
                </div>

                <div className="folhas">
                    <img src={folhas} />
                </div>


                <div className="folhas2">
                    <img src={folhas2} />
                </div>

                <div className="cardsPlanos">
                    <div className="card">
                        <h3>Mensal</h3>
                        <span>Jardine com Paixão Mês a Mês: Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo.</span>
                        <br />
                        <h4>R$38,90<span className='tipoPlano'> /mês</span></h4>
                        <button onClick={ () => navigate('/assine')}>Assinar</button>
                    </div>
                    <div className="card">
                        <span className='planoRecomendado'>recomendado</span>
                        <h3>Semestral</h3>
                        <span>Florindo a Longo Prazo: Economize com Nosso Plano Semestral e Desfrute de Seu Jardim Continuamente.</span>
                        <br />
                        <h4>R$224,90<span className='tipoPlano'> /semestral</span></h4>
                        <button onClick={ () => navigate('/assine')}>Assinar</button>
                    </div>
                    <div className="card">
                        <h3>Anual</h3>
                        <span>Jardim em Flor o Ano Inteiro: Maximize suas Economias com Nosso Plano Anual Exclusivo</span>
                        <br />
                        <h4>R$398,90<span className='tipoPlano'> /anual</span></h4>
                        <button onClick={ () => navigate('/assine')}>Assinar</button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Planos