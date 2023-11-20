import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Componentes
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardServico from "../../components/cardServico/CardServico";


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


// Estilos locais
import './LandingPage.css';

// react icons
import { MdOutlineSecurity } from "react-icons/md";


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
            <div className="nossosServicos">
                <h2>Conheça nossos serviços</h2>
            </div>
            <div className="cardsDisplay">
                <CardServico
                    servico="Segurança"
                    descricao="A Umbu trabalha com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
                <CardServico
                    servico="Portfólio"
                    descricao="A Umbu trabalha com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
                <CardServico
                    servico="Avaliações"
                    descricao="A Umbu trabalha com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
            </div>
            <div className="cardsDisplay">
                <CardServico
                    servico="UMChat"
                    descricao="A Umbu trabalha com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
                <CardServico
                    servico="UMShop"
                    descricao="A Umbu trabalha com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
                <CardServico
                    servico="Segurança"
                    descricao="A Umbu trabalha com sistema de checagem de documentos e antecedentes criminais."
                    iconeCard={<MdOutlineSecurity />}
                />
            </div>
            
            
            <Footer />
        </div>

    )
}

export default LandingPage;
