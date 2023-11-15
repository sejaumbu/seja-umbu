import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';
// import fotoCarousel from "../../../assets/jardineiroFoto.png"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App({ fotoCarousel }) {
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide><img src= "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2019/05/Como-Tirar-e-Editar-Sua-Foto-para-Perfil-em-Redes-Sociais-featuredimage-e1559023010630.jpg" alt='foto de teste'></img></SwiperSlide>
          <SwiperSlide><img src= "https://picsum.photos/500/650?random=1" alt='foto de teste'></img></SwiperSlide>
          <SwiperSlide><img src= "https://picsum.photos/500/700?random=3" alt='foto de teste'></img></SwiperSlide>
          <SwiperSlide><img src= "https://picsum.photos/500/700?random=4" alt='foto de teste'></img></SwiperSlide>
          <SwiperSlide><img src= "https://picsum.photos/500/700?random=5" alt='foto de teste'></img></SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
