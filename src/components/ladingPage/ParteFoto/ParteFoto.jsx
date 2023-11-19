


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SlideFoto from "../../../assets/backgroundImage.svg"
import SlideFoto2 from "../../../assets/imageBackground2.svg"
import SlideFoto3 from "../../../assets/imageBackground3.svg"
import SlideFoto4 from "../../../assets/imageBackground4.svg"

import './parteFoto.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
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
    </>
  );
}


// import React from 'react'
// import "./parteFoto.css"
// import fotolanding from "../../../assets/fotoLandingPage.png"


// function ParteFoto() {
//     return (
//         <div>
//             <div className="fotoPrincipal">
//                 <div className="colunaFotoItens">
//                     <h2>Bem-vindo ao <br /> futuro da jardinagem</h2>
//                     <a href='www.google.com'> <button className="botaoLink" type='submit'> Conheça nosso serviços
//                     </button></a>
//                 </div>
//             </div>
//             ,
  
//         </div>
//     )
// }

// export default ParteFoto;