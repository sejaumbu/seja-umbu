import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
import fotoJar2 from "../../assets/usadosLandingPage/jardineiroFoto2.svg";
import fotoJara from "../../assets/usadosLandingPage/jardineiraFoto.svg";
import fotoJardim from "../../assets/usadosLandingPage/Jardim.svg"
import detalhes from "../../assets/usadosLandingPage/detalhesLP.png";
import detalhes2 from "../../assets/usadosLandingPage/detalhesLP2.png";
import detalhes3 from "../../assets/usadosLandingPage/detalhesLP3.png";
import detalhes4 from "../../assets/usadosLandingPage/detalhesLP4.png";
import testIcon from "../../assets/android-chrome-512x512.png";

// ParceirosImage
import proa from "../../assets/usadosLandingPage/proa.svg";
import jbm from "../../assets/usadosLandingPage/jbm.svg";
import umEntreposto from "../../assets/usadosLandingPage/umEntreposto.svg"

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
                    className="mySwiper1"
                    
                >
                    <SwiperSlide><img src={SlideFoto}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto2}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto3}></img></SwiperSlide>
                    <SwiperSlide><img src={SlideFoto4}></img></SwiperSlide>
                </Swiper>
            </div>

            {/* <div className="conteudoInteiro">
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
            </div> */}

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
                <p>Alguns dos serviços que a UMBU desenvolveu para entregar o melhor da nossa plataforma</p>
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
                        disableOnInteraction: false,
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

            <div className="visaoUmbuLP">
                <article className='conteudoVisaoUmbu'>
                    <img src='https://s3-alpha-sig.figma.com/img/5bcf/a172/025954e586d697c63133d18da785671a?Expires=1702857600&Signature=T4JFfFXQIOGMcu75vVtzB38ZQT55Eb1MOeGrXupkqErFrdqjWcagE7x2-ZZrKR7vQ4tf214mam-wNzMxbkqO703kyr9OnHMCNEQRcshYidVaEkSX~htQLEmFbTKW4m16E35tWxiVIHpTSkrRUU5Hb2Xdho4eDMI2Zc8HpGaSsJMHSFMJ2dw77zNEzr1ZeQ4S9et6YrKePFlldGumoyJgWR6YepoUwTwb1wNljeZHgUhNjAdursTinR5rkmkJLxaVMnT76V0~kS4HQkIZZyaQLUpCcSGIb4JV5ul9OHhV7TBd6VD~NihGPyayvvlxE-~KVpKuVBuCyCj-JybvC-jGIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                    <div className="contextoUmbu">
                        <h2>01. Crie seu perfil</h2>
                        <p>Comece compartilhando suas habilidades, experiência e paixão pela jardinagem para construir um perfil que destaque suas qualidades únicas.</p>
                    </div>
                </article>

                <article className='conteudoVisaoUmbu2'>
                    <img src='https://s3-alpha-sig.figma.com/img/c00c/96e5/5d6cdcdfdeb8ded482a7489b85a0d279?Expires=1702857600&Signature=EFelIwOqp8IYqgrKl6~38vHs0LDbBW0r-zSPq9-KNUXaCsFJ5VJ-arYhlRWdObudcBKLfHCZP6mKiGZqTz0JdXW2G8x4YYekZz5ec8r7T7nBX3GGSb4PTrCzEg1iM63OlOSN5~WHzloY717zfaI38SYSMfTfuiTV8B2rdS8N6vbLMnAwvVJWgyfjAFifcDHDCOkvw6JEcgOavdprDfFMNlE9ZwCwQoAo~clublZfQdaaMGzV-CO0LFP1izeaKfUre5QMQwCTLzMBCoWiOnCjx6EHQPEnDt1LmBnHS-xMhpLaMvqixx-FuJmc1E8-LTXIacriov6EAfsdoMfLdZF3tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                    <div className="contextoUmbu">
                        <h2>02. Explore Nossa Plataforma</h2>
                        <p>Navegue pela diversidade de projetos e oportunidades disponíveis.</p>
                    </div>
                </article>

                <article className='conteudoVisaoUmbu'>
                    <img src='https://s3-alpha-sig.figma.com/img/916f/d0dc/c7e3713f1b8f650da3c781006d8727bf?Expires=1702857600&Signature=RiBr5FbJ2MFv5SGGs5Z~ZmhEVeB0UDZiTJ30cwhY5reFb-L2ugGDRFcVlfLs41Iyx3ChpbnlBeY96zkPNOKOWijfiPatFphgoNg9MNzSge04cndQmq7SVHeHQNVcrpDa5qqqSdgXDav8Gx8y2HcgEQhH9YPfSvL~VL6gVyQIgBSHbw4LkxVdMdKvL~4~BrzlqvpFFRVdBoJL~zk77omwV3wZ6hM~zAyHq3FOMHSyC0hbd1mpj35Q-GBB0cOot0vrTak5WmOnyU0euZoO-qp0j5Hq1mcdIujmSNVgQeQlbUXXirXACm0rNLyqVBCDuGwkoSGQJn6QSONrVpVXT~T8WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                    <div className="contextoUmbu">
                        <h2>03. Conecte-se e Transforme Espaços</h2>
                        <p>Receba solicitações de clientes interessados, estabeleça uma comunicação direta, e comece a transformar espaços verdes enquanto constrói uma reputação sólida na comunidade Umbu.    </p>
                    </div>
                </article>
            </div>

            
            <div className="espacoDelas">
                <h2>Elas Podam</h2>
                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="conteudoDelas">
                    <img src='https://images.unsplash.com/photo-1629997391037-c3b5210b5d35?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <img src='https://images.unsplash.com/photo-1674049405746-94d3c13dfe5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <img src='https://images.unsplash.com/photo-1555955208-94f6fafea771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <img src='https://s3-alpha-sig.figma.com/img/99ff/70da/390f375969da9cfa66ed02fa9ae135a7?Expires=1702857600&Signature=BDMsdUa4xmJ3hdO6bKFVPxsXrnr4XOItSlXikXTyJ5BYkiz4USUaOMGZst8sf4Y4C5X3uEL5E9q~CSJrV6W9AcPvKIYgXA1NQbATwHtWuo8Kz0s85DsoL4OSmFEHC6AUXhtXp5hjXNWyPK3TJLYMvWn76yz6mh4HoukCir8fqSiWcTRQqadmkyjw4BI3UMeYp4ncLqQylxr2EcGU9tJOy8atYwRpfNQG8Yb5GVLPesFeYNTa88xjkw0T9rgS4o7M1pz8frABRMaexloA1e~Stp7Q9ApFmLs~i8bYTgsi8oPTvBuwM0x4fo943pQS1oN380JenNbKU7ywDl5Ltl9Kbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                </div>
                <button>Saiba mais</button>
            </div>
            
            
            <div className="espacoPortifolio">
                <div className="detalhesLP4">
                    <img src={detalhes3}/>
                </div>
                <div className="conteudoPortifolio">
                    <h2>Serviços de Alguns <br/> Jardineiros da Plataforma</h2>
                    <Swiper
                        spaceBetween={400}
                        navigation={true}
                        slidesPerView={3}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="galeriaSwiper"
                    >
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolioGaleria">
                                <img src={SlideFoto}/>
                                <span>José Augusto</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="detalhesLP5">
                    <img src={detalhes4}/>
                    <button className='vejaMaisPortifolio'>Veja mais</button>
                </div>
            </div>
            
            <div className="planosUmbu">
                <span className='testeGratis'>
                    <h2>Teste nossa plataforma</h2>
                    <h2>por<span className='planosTextColor'> 2 meses gratuitos</span></h2>
                </span>
                <div className="umbuPremium">
                    <h3>Planos UMBU <span className='planosTextColor2'>Premium</span></h3>
                    <p>Após o período de teste, escolha o plano que melhor se adapte a você e colha os frutos de uma experiência premium.</p>
                </div>
                <div className="cardsPlanos">
                    <div className="card">
                        <h3>Mensal</h3>
                        <span>Jardine com Paixão Mês a Mês: Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo.</span>
                        <br/>
                        <h4>R$70<span className='tipoPlano'> /mês</span></h4>
                        <button>Assine</button>
                    </div>
                    <div className="card">
                        <span className='planoRecomendado'>recomendado</span>
                        <h3>Semestral</h3>
                        <span>Florindo a Longo Prazo: Economize com Nosso Plano Semestral e Desfrute de Seu Jardim Continuamente.</span>
                        <br/>
                        <h4>R$350<span className='tipoPlano'> /semestral</span></h4>
                        <button>Assine</button>
                    </div>
                    <div className="card">
                        <h3>Anual</h3>
                        <span>Jardim em Flor o Ano Inteiro: Maximize suas Economias com Nosso Plano Anual Exclusivo</span>
                        <br/>
                        <h4>R$700<span className='tipoPlano'> /anual</span></h4>
                        <button>Assine</button>
                    </div>
                </div>
            </div>
            
            <div className="divReviewsCards">
                <h2>Feedbacks</h2>
                <div className="containerFeedbacks">
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
            </div>
            
            <div className="parceirosUmbu">
                <h2>Parceiros</h2>
                <div className="imageParceiros">
                    <img src={proa}/>
                    <img src={umEntreposto}/>
                    <img src={jbm}/>
                </div>
            </div>
               
            <Footer />
        </div>

    )
}

export default LandingPage;
