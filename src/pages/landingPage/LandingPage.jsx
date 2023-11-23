import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Componentes
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardServico from "../../components/cardServico/CardServico";
import AvaliacoesCliente from "../../components/avaliacoes/AvaliacoesCliente"

// Estilos Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Imagens
import fotoJardS from "../../assets/fundoJardinagem.svg";
import fotoJardI from "../../assets/jardineiraPNGOUT.png";
import SlideFoto2 from "../../assets/imageBackground4.svg";
import SlideFoto3 from "../../assets/imageBackground3.svg";
import SlideFoto4 from "../../assets/imageBackground2.svg";
import SlideFoto from "../../assets/backgroundImage.svg";
import fotoJar from "../../assets/JardineiroFoto.png"
import fotoJar2 from "../../assets/jardineiroFoto2.svg"
import fotoJara from "../../assets/jardineiraFoto.svg"




// Estilos locais
import './LandingPage.css';

// react icons
import { MdOutlineSecurity, MdRateReview, MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { TbGardenCart } from "react-icons/tb";
import { PiPlantBold } from "react-icons/pi";

function LandingPage() {
    return (
        <div>
            <Header />
            <div className="carouselLanding">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide><img src={SlideFoto}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto2}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto3}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto4}></img></SwiperSlide>
                </Swiper>
            </div>


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
            <div className='testeClass'>
                <h2 className="nossosServicos">Conheça nossos serviços</h2>
                <hr></hr>
            </div>
            <div className="cardsDisplay">
                <CardServico
                    servico="Segurança"
                    descricao="Trabalhamos com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
                <CardServico
                    servico="Portfólio"
                    descricao="Disponibilizamos jardineiros a criar portfolios compartilhando fotos de seus serviços para destacar suas habilidades."
                    iconeCard={<IoMdPhotos />}
                />
                <CardServico
                    servico="Avaliações"
                    descricao="Oferecemos uma aba de avaliações dos nossos jardineiros, aprimorando a credibilidade deste profissional."
                    iconeCard={<MdRateReview />}
                />
            </div>
            <div className="cardsDisplay">
                <CardServico
                    servico="UMChat"
                    descricao="Facilitamos a comunicação e negociação entre o Jardineiro Ideal e o contratante dos serviços."
                    iconeCard={<MdOutlineMarkUnreadChatAlt />}
                />
                <CardServico
                    servico="Insumos"
                    descricao="Simplifique sua rotina de trabalho! Delegue a cotação e logística de insumos aos nossos parceiros especializados e otimize seu tempo."
                    iconeCard={<TbGardenCart />}
                />
                <CardServico
                    servico="Habilidades"
                    descricao="Oferecemos uma plataforma que destaca suas habilidades, conectando-o aos clientes ideais para serviços de paisagismo excepcionais."
                    iconeCard={<PiPlantBold />}
                />
            </div>

            {/* <div className="containerFrame">
                <h3 className='tituloFrame' >Como funciona?</h3>
                <p className='tituloParagrafo' >Na Umbu, conectamos jardineiros talentosos às necessidades dos contratantes, proporcionando oportunidades gratificantes e construindo espaços verdes excepcionais.</p>
                <iframe width="1005" height="567" src="https://www.youtube.com/embed/OQaCr_Lk91M?si=bmzGW73Xxw06NSKq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> */}

            <div className="cardPlanosumbu">
                <div className="cardCompletoumbu">
                    <h2 className='tituloPlanos' >Planos UMBU <span className='premiumCor' >Premium</span></h2>
                    <p className='descricaoPrecos'>Experimente a Umbu gratuitamente por <span className='premiumCor'>2 meses</span>. 
                    Após o período de teste, escolha o plano que melhor se adapte a você e colha os frutos de uma experiência premium.</p>
                </div>


                <div className="tabelaPrecos">
                    <div className="planoTipo">
                        <h4>Mensal</h4>
                        <p>Jardine com Paixão Mês a Mês: Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo.</p>
                        <div className="precos">
                            <p><span className="precoValor" >R$50</span> / mês</p>
                        </div>
                        <button className="botaoSem">Assine</button>
                    </div>

                    <div className="recomendadoContainer">
                        <div className="recomendadoIcone">
                            <p>Recomendado</p>
                        </div>
                        <div className="planoTipo">
                            <h4>Semestral</h4>
                            <p>Florindo a Longo Prazo: Economize com Nosso Plano Semestral e Desfrute de Seu Jardim Continuamente.</p>
                            <div className="precos">
                                <p><span className="precoValor" >R$275</span> / semestre</p>
                            </div>
                            <button className="botaoSem">Assine</button>
                        </div>
                    </div>

                    <div className="planoTipo">
                        <h4>Anual</h4>
                        <p>Jardim em Flor o Ano Inteiro: Maximize suas Economias com Nosso Plano Anual Exclusivo.</p>
                        <div className="precos">
                            <p><span className="precoValor" >R$500</span> / ano</p>
                        </div>
                        <button className="botaoSem">Assine</button>
                    </div>
                </div>


            </div>




            <h2 className="avalicoesClientes" >Avaliações</h2>

            <div className="divReviewsCards">
                <AvaliacoesCliente
                    fotoJard={fotoJar}
                    nomeAvaliacao="José Santos"
                    descricaoAvaliacao="A experiência na Umbu foi gratificante, conectando-me a projetos emocionantes alinhados às minhas habilidades como jardineiro."
                    descricaoTipoUsuario="Jardineiro" />
                <AvaliacoesCliente
                    fotoJard={fotoJara}
                    nomeAvaliacao="Maria Oliveira"
                    descricaoAvaliacao="A Umbu superou minhas expectativas! Como jardineira, encontrei projetos desafiadores que me permitiram expandir minhas habilidades. A plataforma é intuitiva. Recomendo a todos os profissionais verdes lá fora!"
                    descricaoTipoUsuario="Jardineira" />
                <AvaliacoesCliente
                    fotoJard={fotoJar2}
                    nomeAvaliacao="Carlos Silva"
                    descricaoAvaliacao="A Umbu é uma ferramenta indispensável para quem procura serviços de jardinagem de qualidade. A plataforma é fácil de usar, e a variedade de profissionais é impressionante. Ótima experiência!"
                    descricaoTipoUsuario="Cliente" />
            </div>
            <Footer />
        </div>

    )
}

export default LandingPage;
