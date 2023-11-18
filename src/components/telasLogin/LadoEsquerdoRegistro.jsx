import './LadoEsquerdoRegistro.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import TesteRegistro from '../../assets/ImagemLogin.png'
import TesteRegistro2 from '../../assets/ImagemLogin2.png'
import TesteRegistro3 from '../../assets/ImagemLogin3.png'
import TesteRegistro4 from '../../assets/ImagemLogin4.png'
import { Autoplay } from 'swiper/modules'; //Faz o import de um modulo de autoplay;

export default function LadoEsquerdoRegistro() {
    return (
        <div className="tentativadeSwiper">
            {/* Com o slider adicionado, agora preciso adicionar o funcionamento dele (por meio de props pré definidos) */}
            
            <Swiper
                spaceBetween={100} //adiciona um espaçamento de 100px entre os elementos
                modules={[Autoplay]} //Carrega o modulo para dentro do swiper
                slidesPerView={1} //Defini o número de imagens que vão aparecer por slides, no caso, 1 foto por slide
                pagination={{ clickable: true }} //Diz que o slider será clicável
                className='itemSlides'
                //Atribui as propriedades de animação do autoplay que foi importado; 
                autoplay={{ delay: 2500, disableOnInteraction: false }} 
            >

                <SwiperSlide>
                    <img src={TesteRegistro} className='tamanhoImage' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={TesteRegistro2}  className='tamanhoImage'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={TesteRegistro3}  className='tamanhoImage'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={TesteRegistro4}  className='tamanhoImage'/>
                </SwiperSlide>

            </Swiper>

        </div>
    )


}