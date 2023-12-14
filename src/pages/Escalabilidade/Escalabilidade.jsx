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
                            <h2 className='tituloSlider'> <span className="detalheTitulo">Projeto UMBU Cria: </span>Conectando Pessoas, criado laços</h2>
                            <img src="https://s3-alpha-sig.figma.com/img/c38f/f7c7/42c2ddd872617320bb05bc09fbe42eba?Expires=1703462400&Signature=SeTL~uTT7ihnvGXCGj-cdHcavYZf8AsSt8gqTg3XRrvjrbdFbINt0x9xua7b~kvvabL2WxaK93nknygMnw2o2Z0yoX500QvN-SuAqnyuqKyRZFPV9HbDEkaHbTrTN9ZmDdLp5WaO~lIYsIf8tq9sE05OFjuBIh1orErw6R9MMKLYEFYqKwgekz4s0fwp3528aku9UT3L~oD-boOAVN4LOGvsXgDYXpbESiOuMdvMYkheCVI1jDzNNbCEALiajFrCnvT9oh3ynA~vpjbPhx66m27vH4CWqLS9eIZFYgGPA0pLVe4dPzsRA13GDz27XycpULWA4nx2sD6Q5H56sBQNMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideUmbuNosJardins">
                            <h2 className='tituloSlider'> <span className="detalheTitulo">Projeto UMBU Cria: </span>Conectando Pessoas, criado laços</h2>
                            <img src='https://s3-alpha-sig.figma.com/img/8b83/8ca9/82d23211e2e5c6b88f8e61509b20cfcb?Expires=1703462400&Signature=SZmB3g69~0ccPXxYb-B7YfjTeeFdJVrhbdkv43TSCdWzK2DHknHF1-qhLaqdgWMdBCMOTleei2yiJQFQjVC2P7tOSbjX1PL1w0mSo1QrBbF76V8AqYVEqn2LO8FcD2A9JVIhoBw5F8XK8d719HU94hx6YVJPjrboV0LN1ePsJ9kJ1llnIs0Xyp93Z2ptk2OY~vv9SpHOn9XmBBxK33BRcoefoVKiV3I6WF2FcimJuiyiUk63aIQFnOFJDZKyWb1czGuyPVm1vP-JCatxWbUzph5S3WuhfMK~c35-z3PlJby0a45M3Joi92R2wa6LbfcUjGknF2Qc8XEj6JBjELYwzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideUmbuNosJardins">
                            <h2 className='tituloSlider'> <span className="detalheTitulo">Projeto UMBU Cria: </span>Transformando Espaços Verdes</h2>
                            <img src="https://s3-alpha-sig.figma.com/img/47f7/1ece/8a61725c33e7548dde368ee35c481097?Expires=1703462400&Signature=KdjI3-tcaleaMghZSjjkHfXcTQoIpipcmCUqrfuNb64rNfYjv1cxwolk8PDslRNjKsrBN7~LCFGW67wmJkssv9gqc80c1kpeHIcBMRsLLLE16fXfSGxpxFQwCbVjMp9zG44X~BJqIirKmnusTx7HBBGXisexBgg-De~GrQZqpUJPhE7rff6MIEPFID5zynOL5svqSM1IGg3~KAsG1-cOHMNFyqVDrgD4~ar1~~4PPaoYpj~4tw-HiVEyo49iV4Xi9900iBfOHi0NFG5v5xxQSCpyStdjVPC0gE6MxQVqE8dwEh9pa7W7qn8qWdbmRSi-9EkEM3IdCYkQ2Q3Vw2eYHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideUmbuNosJardins">
                            <h2 className='tituloSlider'> <span className="detalheTitulo">Projeto UMBU Cria: </span>Transformando Espaços Verdes</h2>
                            <img src="https://s3-alpha-sig.figma.com/img/916f/d0dc/c7e3713f1b8f650da3c781006d8727bf?Expires=1703462400&Signature=moD4c511nTxMPI1-1Gk5wnzyk3UoN4oN4hy95BlW~378KiDyQgRHf7yzFY41J0HAdomtPE4LWQRu0wadZSz-7jQQGO57lx07zkyExKMp~0DJkV7AB-fI7TJXvUHxHJe28Z4s6xVSHyOiS1s7yMfxAZT3plRoxb9dhRFWM0d0Qo~ArZVUHT9FmxgDxvpV6PCJ8Ly9HqhaBayiJAfy6erizlc0tfZrZyMogtcv292yDQYZj1ZcSbiO5KO2vYOgOSLYQwW-riZt0zNz1ilxbGCmzmJtjsMGOgtJSWPqHNQznZxePtJOmd~RLcnLuHOHD2Pff4iFqxRnxryqd7ZThUw6hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="image" />
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