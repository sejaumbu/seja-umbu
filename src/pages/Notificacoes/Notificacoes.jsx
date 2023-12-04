import React from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import ItensFixo from '../../components/Notificações/BoxNotificacao/ItensFixo'
import BoxNotificacao from '../../components/Notificações/BoxNotificacao/BoxNotificacao'
import avatarM1 from "../../assets/avatarM1.svg"
import avatarM7 from "../../assets/avatarM7.svg"
import avatarH3 from "../../assets/avatarH3.svg"
import avatarH6 from "../../assets/avatarH6.svg"
import { FaStar } from "react-icons/fa";


function Notificacoes() {
  return (
    <div>
      
        <BarraLateral/>
        <div className="conteudoNotificacao">
      
    <div className='notificacoes'>
      <ItensFixo/>
      <BoxNotificacao
        imgPerfil={avatarM1}
        nomeContratante="Rafaella Costa"
        nota1={<FaStar />}
        nota2={<FaStar />}
        nota3={<FaStar />}
        nota4={<FaStar />}
        nota5={<FaStar />}
        comentario="O trabalho do jardineiro em nossa casa foi verdadeiramente excepcional! Cada flor e arbusto parecem ter ganhado vida sob seus cuidados habilidosos. O jardim agora é um oásis de cores vibrantes e harmonia natural, um testemunho do seu talento e dedicação. Estamos encantados com a transformação que você trouxe ao nosso espaço! "
        data="Há 15 minutos"
      />

      <BoxNotificacao
        imgPerfil={avatarH3}
        nomeContratante="Rodigo da Silva"
        nota1={<FaStar />}
        nota2={<FaStar />}
        nota3={<FaStar />}
        nota4={<FaStar />}
        
        comentario="O trabalho dele foi muito bom, realmente mudou o aspecto do meu jardim para melhor, porem ele se atrasou muito, e acabei perdendo um compromisso"
        data="Há 7 horas"
      />

      
      <BoxNotificacao
        imgPerfil={avatarH6}
        nomeContratante="Mario Augusto"
        nota1={<FaStar />}
        nota2={<FaStar />}
        nota3={<FaStar />}
        nota4={<FaStar />}
        nota5={<FaStar />}
        comentario="O jardineiro arrasou aqui em casa! O jardim tá parecendo um sonho, sério! As plantas tão radiantes, as cores tão vivas, nem parece o mesmo lugar. Esse cara é mágico, transformou nosso cantinho num paraíso verde! Tamo amando demais o trampo dele!"
        data="Há 4 dias"
      />

      
      <BoxNotificacao
        imgPerfil={avatarM7}
        nomeContratante="Maria Eduarda"
        nota1={<FaStar />}
        nota2={<FaStar />}
        nota3={<FaStar />}
        nota4={<FaStar />}
        nota5={<FaStar />}
        comentario="
        Esse jardinheiro é simplesmente fenomenal! A árvore que ele plantou se integrou perfeitamente ao jardim. As podas nas flores foram precisas, o lugar ganhou nova vida. É incrível ver como ele transformou nosso espaço, é um verdadeiro mago das plantas! Estamos maravilhados com o resultado!"
        data="Há 2 semanas"
      />

      
      <BoxNotificacao
        imgPerfil={avatarM1}
        nomeContratante="Beatriz Castro"
        nota1={<FaStar />}
        nota2={<FaStar />}
        nota3={<FaStar />}
        comentario="Serviço decente, mas faltou atenção aos detalhes. Algumas plantas não foram podadas corretamente. A comunicação foi eficaz, mas a execução do trabalho precisa de mais cuidado."
        data="Há 1 mês"
      />
    </div>
    </div>
  </div>
  )
}

export default Notificacoes