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
                    <h2 className='TituloE'>Elas Plantam</h2>
                    <p className='inicioTi'>Celebrando as Mulheres que Plantam no Mundo </p>
                </div>

                <img className='imagem2' src={Foto2} alt="" />

            </header>

            <div className="ConteudoCentral ">
                <div className="inicio">
                    <p className="title">Nosso compromisso é utilizar a tecnologia para impulsionar impactos positivos nas comunidades onde atuamos. Por isso, desenvolvemos uma série de iniciativas voltadas para reconhecer e apoiar os profissionais de jardinagem que escolhem fazer parte da nossa plataforma. Nosso objetivo é incentivar mais jardineiras a se juntarem a nós, proporcionando uma nova oportunidade de renda e ajudando-as a conquistar seus objetivos pessoais e financeiros, ao mesmo tempo em que assumem o controle de suas vidas profissionais.</p>
                </div>


                <div className='PartMulheres'>
                    <div className='Segundo_p'>
                        <h2 className='TituloM'>Mulheres que podam o mundo</h2>
                        <p className='P_2'>A nossa missão é ser uma aliada para um número crescente de mulheres no universo da jardinagem, auxiliando-as a assumir o controle de suas vidas e oferecendo novas oportunidades de renda. Buscamos apoiar as mulheres na conquista de seus objetivos, promovendo a autonomia tanto pessoal quanto financeira. Dessa forma, encorajamos a participação ativa das mulheres em nossa plataforma, incentivando não apenas a integração delas, mas também a indicação de outras mulheres que desejem explorar esse novo horizonte na jardinagem.</p>
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
                        <p> Nosso compromisso com as mulheres no mundo da jardinagem, buscamos atender às necessidades específicas da jardineira. Buscamos, assim, traçar uma jornada única de fortalecimento de suas raízes, oferecendo oportunidades significativas e transformadoras.</p>
                    </div>

                </div>

                <div className='Foto_T'>

                    <div className='textinf'>
                        <p>Queremso da importância de uma rede sólida de apoio. Estamos empenhados em criar uma comunidade onde mulheres na jardinagem possam se conectar, colaborar e compartilhar conhecimentos. Facilitamos o contato  com os clientes para encontrar a oportunidade de trabalho. </p>
                    </div>
                    <img  className= "fotos" src={Foto4} alt="" />
                </div>


                <div className='Foto_T'>
                    <img className= "fotos " src={Foto5} alt="" />
                    <div className='textinf'>
                        <p>Para facilitar a entrada de mais mulheres em nossa plataforma, oferecemos um incentivo exclusivo: os três primeiros meses são gratuitos para novas jardineiras que se cadastrarem. Essa iniciativa visa reduzir as barreiras financeiras iniciais e proporcionar um período de adaptação sem custos, permitindo que as mulheres explorem o potencial da plataforma com tranquilidade.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default elasPodam
