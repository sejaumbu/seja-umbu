import React from 'react'
import "./parteFoto.css"
import fotolanding from "../../../assets/fotoLandingPage.png"


function ParteFoto() {
    return (
        <div>
            <div className="fotoPrincipal">
                <div className="colunaFotoItens">
                    <h2>Bem-vindo ao <br /> futuro da jardinagem</h2>
                    <a href='www.google.com'> <button className="botaoLink" type='submit'> Conheça nosso serviços
                    </button></a>
                </div>
            </div>
            ,
  
        </div>
    )
}

export default ParteFoto;

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import Slide1 from "../../../assets/backgroundImage.svg"

// export default function ParteFoto() {
//   return (
//     <>
//       <Swiper
//         direction={'vertical'}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>{Slide1}</SwiperSlide>

//       </Swiper>
//     </>
//   );
// }
