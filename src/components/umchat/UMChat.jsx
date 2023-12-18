import Mensagens from './itemChat/Mensagens.jsx';
import Contatos from './itemChat/Contatos.jsx';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsMic, BsSend } from "react-icons/bs";
import './UMChat.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from 'react';




export default function UMChat() {
    const [mensagens, setMensagens] = useState({
        mensagem: '',
        enviado: false,
    });

    const handleSend = () => {
        
    }

    const handleChanges = (e) => {  
        setMensagens({mensagem: e.target.value, ...mensagens});
        console.log(mensagem)
    }
    const navigate = useNavigate();
    return (
        <div>
            <div className='umchat'>
                
                <div className='listaContatos'>
                <button type="button" class="btnVolta" onClick={ () => navigate('/painelcontrole')}><FaArrowLeft/> Voltar </button>
                    <div className="inclusaoSimbolo">
                        <h2 className='umChat'>UmChat</h2>
                    </div>
                    <Contatos
                        iconesContatos="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
                        nomeContato="Rafaela Silva"
                        dataMensagem="Há 30 minutos"
                    />
                    <Contatos
                        iconesContatos="https://i.pinimg.com/originals/6b/b6/0f/6bb60f9f19d2ab89b7884be903f85576.jpg"
                        nomeContato="Luciana Oliveira"
                        dataMensagem="Há 1 hora"
                    />
                    <Contatos
                        iconesContatos="https://i.pinimg.com/originals/c3/02/bd/c302bdbab47f484464c67978004413bc.jpg"
                        nomeContato="Joana Santos"
                        dataMensagem="Há 2 horas"
                    />
                    <Contatos
                        iconesContatos="https://i.pinimg.com/originals/19/c7/4f/19c74f6a44c05aba8bf74c829fd0527d.jpg"
                        nomeContato="Mariana Almeida"
                        dataMensagem="Há 3 horas"
                    />
                    <Contatos
                        iconesContatos="https://images.pexels.com/photos/13211891/pexels-photo-13211891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        nomeContato="Rodrigo Pereira"
                        dataMensagem="Há 4 horas"
                    />

                </div>
                <div>
                    <Mensagens 
                    infoMensagem={mensagens}
                    />
                    <div className='footerMessage'>
                        <div className="inputMessage">
                            <MdOutlineEmojiEmotions />
                            <input onChange={handleChanges}  placeholder='Escreva para o prestador de serviço...'  />
                            <button className='sendButton' ><BsSend /></button>
                        </div>
                        <button className='voiceButton'><BsMic /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}



