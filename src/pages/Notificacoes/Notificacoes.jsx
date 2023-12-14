import React from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import Opcoes from '../../components/Notificações/BoxNotificacao/Opcoes'
import BoxNotificacao from '../../components/Notificações/BoxNotificacao/BoxNotificacao'
// import avatarM1 from "../../assets/j"
// import avatarM7 from "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// import avatarH3 from "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// import avatarH6 from "https://images.unsplash.com/photo-1501943416256-08140ba03763?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
import { FaStar } from "react-icons/fa";


function Notificacoes() {
  return (
    <div>

      <BarraLateral />
      <div className="conteudoNotificacao">

        <div className='notificacoes'>
          <Opcoes />
          <BoxNotificacao
            imgPerfil="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
            nomeContratante="Rafaela  Silva"
            comentario="Oi, estou pensando em criar um jardim vertical na minha varanda. Você tem alguma sugestão de plantas que funcionariam bem nesse espaço?"
            data="Há 30 minutos"
          />
          <BoxNotificacao
            imgPerfil="https://i.pinimg.com/originals/6b/b6/0f/6bb60f9f19d2ab89b7884be903f85576.jpg"
            nomeContratante="Luciana Oliveira"
            comentario="Olá! Preciso de ajuda para identificar uma planta no meu jardim. Você poderia me orientar sobre como cuidar dela?"
            data="Há 1 hora"
          />
          <BoxNotificacao
            imgPerfil="https://i.pinimg.com/originals/c3/02/bd/c302bdbab47f484464c67978004413bc.jpg"
            nomeContratante="Joana Santos"
            comentario="Estou planejando renovar meu jardim. Alguma sugestão de design ou plantas que estão em alta?"
            data="Há 2 horas"
          />
          <BoxNotificacao
            imgPerfil="https://i.pinimg.com/originals/19/c7/4f/19c74f6a44c05aba8bf74c829fd0527d.jpg"
            nomeContratante="Mariana Almeida"
            comentario="Oi, gostaria de agendar uma visita para avaliação do meu jardim. Quando você estaria disponível?"
            data="Há 3 horas"
          />
          <BoxNotificacao
            imgPerfil="https://images.pexels.com/photos/13211891/pexels-photo-13211891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            nomeContratante="Rodrigo Pereira"
            comentario="Oi, estou impressionado com o último trabalho que você fez no meu jardim. Muito obrigado pelo excelente serviço!"
            data="Há 4 horas"
          />


        </div>
      </div>
    </div>
  )
}

export default Notificacoes