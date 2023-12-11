import React from 'react'
import ItensSuperior from './Avaliações/ItensSuperior'
import ComentarioNotas from './Avaliações/ComentarioNotas'
// import avatarM1 from "../../assets/avatarM1.svg"
// import avatarM7 from "../../assets/avatarM7.svg"
// import avatarH3 from "../../assets/avatarH3.svg"
// import avatarH6 from "../../assets/avatarH6.svg"
import { FaStar } from "react-icons/fa";


function AbaDeAvaliacoes() {
  return (
    <div className='notificacoes'>
    <ItensSuperior
    reviews="5"
    />
    <ComentarioNotas
    
      imgPerfil={avatarM1}
      nomeContratante="Cristiana Ronalda"
      nota1={<FaStar />}
      nota2={<FaStar />}
      nota3={<FaStar />}
      nota4={<FaStar />}
      nota5={<FaStar />}
      comentario="Uma característica que me impressionou foi o comprometimento do jardineiro com práticas ambientalmente sustentáveis. Ele sugeriu métodos ecológicos de cuidado com as plantas, evitando o uso excessivo de produtos químicos. Essa abordagem eco-friendly adicionou um valor significativo ao serviço prestado."
      data="23/11/2023 -11h52"
    />

    <ComentarioNotas
      imgPerfil={avatarH3}
      nomeContratante="Ronaldo Nazario"
      nota1={<FaStar />}
      nota2={<FaStar />}
      nota3={<FaStar />}
      nota4={<FaStar />}
      nota5={<FaStar />}
      comentario="A transparência nos preços é algo que aprecio. O jardineiro forneceu um orçamento claro desde o início, sem surpresas desagradáveis no final. O custo do serviço foi justo, considerando a qualidade do trabalho entregue. Uma ótima opção para quem procura um profissional confiável e acessível."
      data="22/08/2023 - 18h30"
    />

    
    <ComentarioNotas
      imgPerfil={avatarH6}
      nomeContratante="Gabriel Santana"
      nota1={<FaStar />}
      nota2={<FaStar />}
      nota3={<FaStar />}
      nota4={<FaStar />}
      nota5={<FaStar />}
      comentario="Este jardineiro foi incrivelmente eficiente. Ele concluiu o trabalho dentro do prazo estipulado, sem comprometer a qualidade do serviço. Cada tarefa foi realizada com cuidado e precisão, mostrando um profissionalismo que valorizo muito. Recomendo para quem busca resultados rápidos e de alta qualidade."
      data="15/07/2023 - 11h43"
    />

    
    <ComentarioNotas
      imgPerfil={avatarM7}
      nomeContratante="Manuella Jaidan"
      nota1={<FaStar />}
      nota2={<FaStar />}
      nota3={<FaStar />}
      nota4={<FaStar />}
      nota5={<FaStar />}
      comentario="O jardineiro não apenas arrumou meu jardim, mas também ofereceu um atendimento personalizado. Ele ouviu minhas preferências e preocupações, adaptando seu trabalho de acordo. Fiquei impressionado com a atenção aos detalhes e a disposição para explicar o processo de cuidado com as plantas. Definitivamente, um toque personalizado que faz toda a diferença."
      data="25/06/2023 - 19h48"
    />

    
    <ComentarioNotas
      imgPerfil={avatarM1}
      nomeContratante="Rafaella Costa"
      nota1={<FaStar />}
      nota2={<FaStar />}
      nota3={<FaStar />}
      nota4={<FaStar />}
      nota5={<FaStar />}
      comentario="Contratei o jardineiro para arrumar meu jardim e fiquei extremamente satisfeito com o resultado. Ele demonstrou grande habilidade e conhecimento botânico, além de cuidado ao lidar com cada planta. Meu jardim nunca esteve tão bonito e saudável. Recomendo seus serviços a todos que buscam um profissional dedicado."
      data="01/02/2023 - 22h13"
    />

  </div>

)
}

export default AbaDeAvaliacoes