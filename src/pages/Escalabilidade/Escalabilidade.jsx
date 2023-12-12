import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Estilos Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// Imagens

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
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="escalabilidadeSwiper"
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
            </div>
            <div className="conteudoEscalabilidadeTexto">
                <h2>Escalabilidade</h2>
                <p>A escalabilidade é a capacidade de uma empresa de crescer e se desenvolver de forma sustentável, sem perder a qualidade dos seus produtos e serviços. A escalabilidade é um dos fatores que mais influenciam no sucesso de uma empresa, pois é ela que permite que a empresa cresça sem perder a qualidade de seus produtos e serviços. A escalabilidade é um dos fatores que mais influenciam no sucesso de uma empresa, pois é ela que permite que a empresa cresça sem perder a qualidade de seus produtos e serviços.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Escalabilidade;