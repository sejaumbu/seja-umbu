import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from 'react-bootstrap/Card';

// Componentes
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardServico from "../../components/cardServico/CardServico";
import AvaliacoesCliente from "../../components/avaliacoes/AvaliacoesCliente"

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
import fotoJar from "../../assets/JardineiroFoto.png";
import fotoJar2 from "../../assets/jardineiroFoto2.svg";
import fotoJara from "../../assets/jardineiraFoto.svg";
import fotoJardim from "../../assets/Jardim.svg"
import detalhes from "../../assets/detalhesLP.png";
import detalhes2 from "../../assets/detalhesLP2.png";
import testIcon from "../../assets/android-chrome-512x512.png";



// Estilos locais
import './LandingPage.css';

// react icons
import { MdOutlineSecurity, MdRateReview, MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { TbGardenCart } from "react-icons/tb";
import { PiPlantBold } from "react-icons/pi";

function LandingPage() {
    return (
        <div>
            <Header />
            <div className="carouselLanding">
                <div className="carouselLandingConteudo">
                    <span>
                        <h2 className='tittleLanding'>Bem vindo ao futuro da</h2>
                        <h2 className='subTittleLanding'>Jardinagem</h2>
                        <p>Seu jardim, nossa missão!</p>
                        <button>Cadastrar</button>
                    </span>
                </div>
                
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
                    className="mySwiper"
                    
                >
                    <SwiperSlide><img src={SlideFoto}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto2}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto3}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto4}></img></SwiperSlide>
                </Swiper>
            </div>

            <div className="conteudoInteiro">
                <div className="informacao1LP">
                    <div className='parteTextoLanding1LP'>
                        <h2 className='titulo1LP'> Por que se juntar à Umbu?</h2>
                        <p className='paragrafo1LP'>Na Umbu, unimos apaixonados por jardins e oportunidades gratificantes.</p>
                    </div>
                    <img className='imagemJardinagem1LP' src={fotoJardI} />
                </div>

                <div className="informacao2LP">
                    <div className="cardInformacaoLP2">
                        <h2 className='titulo2LP'>Jardineiros de Qualidade</h2>
                        <img className='imagemJardinagem2LP' src={fotoJardS} />
                    </div>
                    <img src={detalhes} className='detalhesLP2'/>
                </div>

                <div className="informacao3LP">
                    <img src={detalhes2} className='detalhesLP3'/>
                    <div className="cardInformacaoLP3">
                        <h2 className='titulo3LP'>Saiba mais no UMBlog</h2>
                        <img className='imagemJardinagem3LP' src={fotoJardim} />
                    </div>
                </div>
            </div>

            <div className="especialidadesUmbu">
                <h2>Especialidade dos jardineiros</h2>
                <div className="iconesEspecilidades">
                    <div className="conteudoHabilidades">
                        <aside>
                            <img src={testIcon}/>
                        </aside>
                        <span>Corta grama</span>
                    </div>
                    <div className="conteudoHabilidades">
                        <aside>
                            <img src={testIcon}/>
                        </aside>
                        <span>Podar</span>
                    </div>
                    <div className="conteudoHabilidades">
                        <aside>
                            <img src={testIcon}/>
                        </aside>
                        <span>Decorar plantas</span>
                    </div>
                    <div className="conteudoHabilidades">
                        <aside>
                            <img src={testIcon}/>
                        </aside>
                        <span>Manutenção jardim</span>
                    </div>
                    <div className="conteudoHabilidades">
                        <aside>
                            <img src={testIcon}/>
                        </aside>
                        <span>Limpeza jardim</span>
                    </div>
                </div>
            </div>

            <div className='nossosServicosLP'>
                <h2 className="nossosServicos">Serviços da UMBU</h2>
                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <hr/>
            </div>

            <div className="cardsDisplay">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardServico
                            servico="Segurança"
                            iconeCard={<MdOutlineSecurity />}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardServico
                            servico="Portfólio"
                            iconeCard={<IoMdPhotos />}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardServico
                            servico="Avaliações"
                            iconeCard={<MdRateReview />}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardServico
                            servico="UMChat"
                            descricao="Facilitamos a comunicação e negociação entre o Jardineiro Ideal e o contratante dos serviços."
                            iconeCard={<MdOutlineMarkUnreadChatAlt />}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardServico
                            servico="Insumos"
                            descricao="Simplifique sua rotina de trabalho! Delegue a cotação e logística de insumos aos nossos parceiros especializados e otimize seu tempo."
                            iconeCard={<TbGardenCart />}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardServico
                        servico="Habilidades"
                        descricao="Oferecemos uma plataforma que destaca suas habilidades, conectando-o aos clientes ideais para serviços de paisagismo excepcionais."
                        iconeCard={<PiPlantBold />}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>


            <div className="cardPlanosumbu">
                <div className="cardCompletoumbu">
                    <h2 className='tituloPlanos' >Planos UMBU <span className='premiumCor' >Premium</span></h2>
                    <p className='descricaoPrecos'>Experimente a Umbu gratuitamente por <span className='premiumCor'>2 meses</span>. 
                    Após o período de teste, escolha o plano que melhor se adapte a você e colha os frutos de uma experiência premium.</p>
                </div>


                <div className="tabelaPrecos">
                    <div className="planoTipo">
                        <h4>Mensal</h4>
                        <p>Jardine com Paixão Mês a Mês: Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo.</p>
                        <div className="precos">
                            <p><span className="precoValor" >R$50</span> / mês</p>
                        </div>
                        <button className="botaoSem">Assine</button>
                    </div>

                    <div className="recomendadoContainer">
                        <div className="recomendadoIcone">
                            <p>Recomendado</p>
                        </div>
                        <div className="planoTipo">
                            <h4>Semestral</h4>
                            <p>Florindo a Longo Prazo: Economize com Nosso Plano Semestral e Desfrute de Seu Jardim Continuamente.</p>
                            <div className="precos">
                                <p><span className="precoValor" >R$275</span> / semestre</p>
                            </div>
                            <button className="botaoSem">Assine</button>
                        </div>
                    </div>

                    <div className="planoTipo">
                        <h4>Anual</h4>
                        <p>Jardim em Flor o Ano Inteiro: Maximize suas Economias com Nosso Plano Anual Exclusivo.</p>
                        <div className="precos">
                            <p><span className="precoValor" >R$500</span> / ano</p>
                        </div>
                        <button className="botaoSem">Assine</button>
                    </div>
                </div>  


            </div>

            <h2 className="avalicoesClientes" >Avaliações</h2>

            <div className="divReviewsCards">
                <AvaliacoesCliente
                    fotoJard={fotoJar}
                    nomeAvaliacao="José Santos"
                    descricaoAvaliacao="A experiência na Umbu foi gratificante, conectando-me a projetos emocionantes alinhados às minhas habilidades como jardineiro."
                    descricaoTipoUsuario="Jardineiro" />
                <AvaliacoesCliente
                    fotoJard={fotoJara}
                    nomeAvaliacao="Maria Oliveira"
                    descricaoAvaliacao="A Umbu superou minhas expectativas! Como jardineira, encontrei projetos desafiadores que me permitiram expandir minhas habilidades. A plataforma é intuitiva. Recomendo a todos os profissionais verdes lá fora!"
                    descricaoTipoUsuario="Jardineira" />
                <AvaliacoesCliente
                    fotoJard={fotoJar2}
                    nomeAvaliacao="Carlos Silva"
                    descricaoAvaliacao="A Umbu é uma ferramenta indispensável para quem procura serviços de jardinagem de qualidade. A plataforma é fácil de usar, e a variedade de profissionais é impressionante. Ótima experiência!"
                    descricaoTipoUsuario="Cliente" />
            </div>
            <Footer />
        </div>

    )
}

export default LandingPage;
