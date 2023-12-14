
import React from 'react';
import { GrFacebookOption, GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './sobrenos.css';
import Footer from '../../components/footer/Footer.jsx';
import Header from '../../components/header/Header.jsx';

function Sobrenos() {
    return (

        <div>
            <Header />
            <div className="tituloSo">
                <h2 className='tituloPaginaSobre' >Conheça nossos desenvolvedores</h2>
                <p>Conheça a equipe por trás da UMBU, uma plataforma inovadora que vai além de simples conexões. Com um time diversificado de profissionais apaixonados, desde desenvolvedores experientes até designers criativos, a UMBU não apenas resolve desafios específicos para jardineiros, mas também promove uma experiência única e sustentável. Vamos apresentar os rostos por trás da UMBU e como cada membro contribui para criar um jardim digital florescente, onde a tecnologia encontra a paixão pela jardinagem.</p>
            </div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                effect="fade"
                loop={true}
                slidesPerView={5}
                className="swiperSobreNos"
            >
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://media.licdn.com/dms/image/D4D03AQE78ZAuB8rkUw/profile-displayphoto-shrink_400_400/0/1694717478295?e=1707350400&v=beta&t=CXIwmm5CzCFpPlR1LdKwWPYc3AphfwMHdFFX3PU-8Iw' alt="Camile Santana" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Camile Santana</h3>
                            <p className='profissao'>Product Owner & Front-End</p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/camilepsantana/" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/ichcamile" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://avatars.githubusercontent.com/u/115378745?v=4' alt="Maicoln Pereira" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Maicoln Pereira</h3>
                            <p className='profissao'>Scrum & BackEnd</p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/maicoln-p-sousa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPA5s1mPhSSKxBaYhKauPzQ%3D%3D" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/Maicoln-Per" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://media.licdn.com/dms/image/D4D03AQHYFom1ViuvIw/profile-displayphoto-shrink_400_400/0/1692478688931?e=1707955200&v=beta&t=5sQnV4YpNNBRsW9GJscPWFrSZcF55IlQHU67IEuIYAE' alt="Gustavo de Melo" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Gustavo de Melo </h3>
                            <p className='profissao'> Front-End</p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/gustavo-de-melo-fernandes-6b321822b/" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/GustavoMeloFn" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://media.licdn.com/dms/image/D4D03AQGKYL6_6nxc5Q/profile-displayphoto-shrink_400_400/0/1697089198877?e=1707955200&v=beta&t=rb1kj0PrA86wMBinWxsg-6VvMGshJOcCbdWzTzCABoc' alt="Ingrid Vitória" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Ingrid Vitória </h3>
                            <p className='profissao'> Front-End </p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/ingrid-vit%C3%B3ria-santos-30b434206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtkO3shgCQsicc4f%2F1r%2BMPg%3D%3D" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/IngridvS" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://avatars.githubusercontent.com/u/110247321?v=4' alt="Bruno Jaidan" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Bruno Jaidan </h3>
                            <p className='profissao'> UI/UX & Social Media</p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/bruno-jaidan/" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/BrunoJaidan" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://avatars.githubusercontent.com/u/119820823?v=4' alt="Felipe Oliveira" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Felipe Oliveira</h3>
                            <p className='profissao'>Banco de Dados</p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/felipe-nascimento-a336a81ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6ZpB2EOJSDG6goOKRZ5cCA%3D%3D" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/Felipenascimento2001?tab=following" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://media.licdn.com/dms/image/D4E03AQHEarcytVyGvQ/profile-displayphoto-shrink_400_400/0/1696596377380?e=1707955200&v=beta&t=wifn3tNHSvjWPU7LvBhbfidYEBD2Gfxt0JhGIgTL5sE' alt="Lucas Bonfim" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Lucas Bonfim</h3>
                            <p className='profissao'> Fullstack</p>

                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/lucas-bonfim-545845289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BguIshj1eQIyFomHbAH7C%2Fg%3D%3D" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/Lucas-Bonfim80" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardPhoto">
                        <img className='fotocard' src='https://media.licdn.com/dms/image/D4D03AQE1nR7QuBXn4g/profile-displayphoto-shrink_400_400/0/1699486882137?e=1707955200&v=beta&t=CkXCgH4MjxUDeBGTZtSIokuXkD0r6PheXNnsW_cvYG4' alt="Gabriel Borges" />
                        <div className="infos">
                            <h3 className='nomeintegrante'>Gabriel Borges</h3>
                            <p className='profissao'> Financeiro & Back-End</p>
                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/gabriel-borges-b69706263?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdM1vijDLSYiacfuqeEWWUg%3D%3D" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
                                <a href="https://github.com/GabrielBorgesCorrea" className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="descricaoCargos">
                <h2 className='tituloPaginaSobre'> Como semeamos a UMBU?</h2>

                <div className="setorFull">
                    <h2 className='tituloSetor'>UI/UX Designer e Social Media</h2>
                    <p className="integrantes">Bruno Jaidan</p>
                    <p className="descricaoCargo">É o criativo da UMBU, trazendo vida à plataforma com seu talento em design. Como UI/UX Designer e responsável pelas redes sociais, ele garante que a UMBU não apenas funcione bem, mas também tenha uma presença visualmente impactante e engajadora.</p>
                </div>
                <div className="setorFull">
                    <h2 className='tituloSetor'>Front-End</h2>
                    <p className="integrantes">Camile, Lucas, Gustavo e Ingrid</p>
                    <p className="descricaoCargo">Na linha de frente da UMBU, a equipe de Front-end não apenas cria interfaces envolventes, mas molda experiências que transcendem expectativas. Guiados pela paixão pela usabilidade e estética, eles transformam a navegação na UMBU em uma jornada visualmente deslumbrante e intuitiva, onde cada clique é uma descoberta agradável.</p>
                </div>
                <div className="setorFull">
                    <h2 className='tituloSetor'>Banco de Dados</h2>
                    <p className="integrantes">Felipe Nascimento</p>
                    <p className="descricaoCargo">Responsável pelo robusto sistema de banco de dados que alimenta a plataforma. Com um olhar atento aos detalhes, ele garante que a UMBU tenha uma base sólida, proporcionando uma experiência confiável tanto para jardineiros quanto para usuários.</p>
                </div>
                <div className="setorFull">
                    <h2 className='tituloSetor'>Back-End</h2>
                    <p className="integrantes">Lucas, Maicoln e Gabriel</p>
                    <p className="descricaoCargo">Os mestres da funcionalidade, a equipe de Back-end constrói e mantém os alicerces que fazem a UMBU operar suavemente. Com habilidades técnicas excepcionais, eles conectam os pontos entre o front-end e as operações internas, garantindo uma experiência de usuário coesa e eficiente.</p>
                </div>

            </div>
            <div className="footerSobreNos">
            <Footer />
        
            </div>

        </div>
    );
}

export default Sobrenos;
