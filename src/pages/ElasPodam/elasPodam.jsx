import React from 'react'
import Foto from "../../assets/ElaSPodam.png"
import Foto2 from "../../assets/ElaSPodam2.png"
import Foto3 from "../../assets/Foto_ElasPodam.png"
import Foto4 from "../../assets/Foto_ElasPodam2.png"
import Foto5 from "../../assets/Foto_ElasPodam3.png"

import "./Podam.css";
function elasPodam() {
    return (
        <div>
            <header>
                <img className='imagem1' src={Foto} alt="" />
                <div className='aliarItens'>
                    <h2 className='TituloE'>Elas Podam</h2>
                    <p className='inicioTi'>Celebrando as Mulheres que Podam no Mundo </p>
                </div>

                <img className='imagem2' src={Foto2} alt="" />

            </header>

            <div className="ConteudoCentral ">
                <div className="inicio">
                    <p className="title">É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como modelo de texto padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente (injetando humor e coisas do gênero).</p>
                </div>


                <div className='PartMulheres'>
                    <div className='Segundo_p'>
                        <h2 className='TituloM'>Mulheres que podam o mundo</h2>
                        <p className='P_2'>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como humor e coisas do gênero). É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como humor e coisas do gênero).</p>
                        <button>CADASTRE-SE</button>
                    </div>

                </div>

                <div className='PartSeguran'>
                    <div className="terceiro_p">
                        <h2 className='TituloS'>Segurança das Mulheres</h2>
                        <p className='P_3'>Na UMBU, segurança é prioridade e nenhum tipo de assédio ou violência é tolerado. Para contribuir com a solução de questões complexas como essa, nos unimos a organizações especialistas no assunto e trabalhamos em projetos dentro e fora da plataforma.</p>
                    </div>
                </div>


                <div className='Foto_T'>

                    <img className= "fotos " src={Foto3} alt="" />

                    <div className='textinf'>
                        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como humor e coisas do gênero). É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como</p>
                    </div>

                </div>

                <div className='Foto_T'>

                    <div className='textinf'>
                        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como humor e coisas do gênero). É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como</p>
                    </div>
                    <img  className= "fotos" src={Foto4} alt="" />
                </div>


                <div className='Foto_T'>
                    <img className= "fotos " src={Foto5} alt="" />
                    <div className='textinf'>
                        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como humor e coisas do gênero). É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default elasPodam
