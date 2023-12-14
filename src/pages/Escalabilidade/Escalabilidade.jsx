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
            <div className="conteudoEscalabilidade">
                <h2>Escalabilidade</h2>
                <p>Na Umbu, nossa ênfase na escalabilidade permeia todos os aspectos, desde a infraestrutura até o design de produtos. Comprometidos com o crescimento sustentável, buscamos soluções que atendam às demandas atuais e proporcionem uma base sólida para a expansão contínua, permitindo que nossos clientes evoluam com confiança ao lado da Umbu.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Escalabilidade;