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
                </Swiper>
            </div>
            <div className="conteudoEscalabilidade">
                <h3>Projeto de escalabilidade da UMBU</h3>
                <p>O projeto de escalabilidade da UMBU visa melhorar a vida do jardineiro, oferecendo soluções inteligentes e sustentáveis para o cultivo de plantas. O projeto utiliza sensores, aplicativos e algoritmos para monitorar as condições das plantas, otimizar o uso de água e fertilizantes, e fornecer dicas e recomendações personalizadas para cada jardineiro. O objetivo é tornar a jardinagem mais fácil, divertida e produtiva, além de contribuir para a preservação do meio ambiente.</p>
                <br/>
                <h3>Projeto de escalabilidade da UMBU</h3>
                <p>O projeto de escalabilidade da UMBU visa melhorar a vida do jardineiro, oferecendo soluções inteligentes e sustentáveis para o cultivo de plantas. O projeto utiliza sensores, aplicativos e algoritmos para monitorar as condições das plantas, otimizar o uso de água e fertilizantes, e fornecer dicas e recomendações personalizadas para cada jardineiro. O objetivo é tornar a jardinagem mais fácil, divertida e produtiva, além de contribuir para a preservação do meio ambiente.</p>
            </div>  
            <Footer/>
        </div>
    )
}

export default Escalabilidade