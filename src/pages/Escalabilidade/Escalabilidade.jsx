import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Estilos Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Escalabilidade.css";
import escalabilidade1 from "../../assets/escalabilidade1.svg";
import escalabilidade2 from "../../assets/escalabilidade2.svg";
import escalabilidade3 from "../../assets/escalabilidade3.svg";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// Imagens
import fotoJardS from "../../assets/fundoJardinagem.svg";
import fotoJardI from "../../assets/jardineiraPNGOUT.png";
import SlideFoto2 from "../../assets/imageBackground4.svg";
import SlideFoto3 from "../../assets/imageBackground3.svg";
import SlideFoto4 from "../../assets/imageBackground2.svg";
import SlideFoto from "../../assets/backgroundImage.svg";
import fotoJar from "../../assets/JardineiroFoto.png";
import fotoJar2 from "../../assets/jardineiroFoto2.svg";
import fotoJara from "../../assets/jardineiraFoto.svg";
import umbuPlanta from "../../assets/usadosEscalabilidade/umbuPlanta.png"


import "./escalabilidade.css"



function Escalabilidade() {
    return (
        <div>
            <Header />
            <div className="tituloCaroussel">
            </div>
            <div className="carouselEscalabilidade">
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

                    <SwiperSlide>
                        <div className="slideUmbuNosJardins">
                            <h2 className='tituloSlider'> <span className="detalheTitulo">Projeto UMBU Cria: </span>Conectando Pessoas, Transformando Espaços Verdes</h2>
                            <img src={umbuPlanta} alt="" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideUmbuNosJardins">
                            <h2 className='tituloSlider'> <span className="detalheTitulo">Projeto UMBU Cria: </span>Conectando Pessoas, Transformando Espaços Verdes</h2>
                            <img src={umbuPlanta} alt="" className="image" />
                        </div>
                    </SwiperSlide>
                 
                 

                </Swiper>
                {/* <Swiper
                    effect={'fade'}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="mySwiper carousel-blog"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    pagination={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <a href="">
                            <div className="box-slide-imagem-1 slide-carousel">
                                <div className='slide-content'>
                                    <span>AGRICULTURA URBANA</span>
                                    <h2>
                                        Conheça o Telhado Verde do Shopping Eldorado: Iniciativa
                                        promove horta e compostagem.
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide> */}


            </div>
            {/* <h2 className="titulo">Futuro da UMBU</h2>
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
            </div> */}
            <Footer />
        </div>
    )
}

export default Escalabilidade