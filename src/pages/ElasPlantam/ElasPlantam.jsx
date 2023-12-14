import React from 'react'
import { useNavigate } from 'react-router-dom';

//Imagens da Página
import Capa from "../../assets/usadosElasPlantam/CapaElasPlantam.png"
import imagem1 from "../../assets/usadosElasPlantam/Imagem1.png"
import imagem2 from "../../assets/usadosElasPlantam/Imagem2.png"
import imagem3 from "../../assets/usadosElasPlantam/Imagem3.png"

//Componentes
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';



import "./Plantam.css";

function elasPlantam() {
    const navigate = useNavigate();

    return (
        <>
             <Header />

            <div id='conteudoCompletoElas'>
                <div className='capa'>

                    <img className='capa' src={Capa} alt="" />
                    <div className='texto-meio'>
                        <h2 className='Titulo'>Elas Plantam</h2>
                        <p className='SubTitulo'>Celebrando as Mulheres que Plantam no Mundo </p>
                    </div>

                </div>


                <div className="Texto-inicial">
                    <div className="inicio">
                        <p className="title">Nosso compromisso é utilizar a tecnologia para impulsionar impactos positivos nas comunidades onde atuamos. Por isso, desenvolvemos uma série de iniciativas voltadas para reconhecer e apoiar os profissionais de jardinagem que escolhem fazer parte da nossa plataforma. Nosso objetivo é incentivar mais jardineiras a se juntarem a nós, proporcionando uma nova oportunidade de renda e ajudando-as a conquistar seus objetivos pessoais e financeiros, ao mesmo tempo em que assumem o controle de suas vidas profissionais.</p>
                    </div>


                    <div className='mulheres-container'>
                        <div className='segundo-paragrafo'>
                            <h2 className='titulo-mulheres'>Mulheres que podam o mundo</h2>
                            <p className='paragrafo-mulheres'>A nossa missão é ser uma aliada para um número crescente de mulheres no universo da jardinagem, auxiliando-as a assumir o controle de suas vidas e oferecendo novas oportunidades de renda. Buscamos apoiar as mulheres na conquista de seus objetivos, promovendo a autonomia tanto pessoal quanto financeira. Dessa forma, encorajamos a participação ativa das mulheres em nossa plataforma, incentivando não apenas a integração delas, mas também a indicação de outras mulheres que desejem explorar esse novo horizonte na jardinagem.</p>
                            <button className='btn-seguranca' type="button" onClick={() => navigate('/registro')}>CADASTRE-SE</button>
                        </div>

                    </div>

                    <div className='seguranca-container'>
                        <div className="terceiro-paragrafo">
                            <h2 className='titulo-seguranca'>Segurança das Mulheres</h2>
                            <p className='paragrafo-seguranca'>Na UMBU, segurança é prioridade e nenhum tipo de assédio ou violência é tolerado. Para contribuir com a solução de questões complexas como essa, nos unimos a organizações especialistas no assunto e trabalhamos em projetos dentro e fora da plataforma.</p>
                        </div>
                    </div>


                    <div className='ImgSeguranca'>

                        <img className="img-1" src={imagem1} alt="" />

                        <div className='textSeguranca'>
                            <p className='paragrafo-img'> Nosso compromisso com as mulheres no mundo da jardinagem, buscamos atender às necessidades específicas da jardineira. Buscamos, assim, traçar uma jornada única de fortalecimento de suas raízes, oferecendo oportunidades significativas e transformadoras.</p>
                        </div>

                    </div>

                    <div className='ImgSeguranca'>

                        <div className='textSeguranca'>
                            <p className='paragrafo-img'>Importância de uma rede sólida de apoio. Estamos empenhados em criar uma comunidade onde mulheres na jardinagem possam se conectar, colaborar e compartilhar conhecimentos. Facilitamos o contato  com os clientes para encontrar a oportunidade de trabalho. </p>
                        </div>
                        <img className="img-2" src={imagem2} alt="" />
                    </div>


                    <div className='ImgSeguranca'>
                        <img className="img-3" src={imagem3} alt="" />
                        <div className='textSeguranca'>
                            <p className='paragrafo-img'>Para facilitar a entrada de mais mulheres em nossa plataforma, oferecemos um incentivo exclusivo: os três primeiros meses são gratuitos para novas jardineiras que se cadastrarem. Essa iniciativa visa reduzir as barreiras financeiras iniciais e proporcionar um período de adaptação sem custos, permitindo que as mulheres explorem o potencial da plataforma com tranquilidade.</p>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default elasPlantam
