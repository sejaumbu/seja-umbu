import Mensagens from './ItemChat/Mensagens.jsx';
import Contatos from './ItemChat/Contatos.jsx';
import Mensagens from "./itemChat/Mensagens.jsx";
import Contatos from './itemChat/Contatos.jsx';  
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsMic, BsSend } from "react-icons/bs";
import './UMChat.css';

export default function UMChat() {
    return (
        <main className='umchat'>
            <div className='listaContatos'>
                <h2 className='umChat'>UmChat</h2>
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
                <Mensagens />
                <div className='footerMessage'>
                    <div className="inputMessage">
                        <MdOutlineEmojiEmotions />
                        <input placeholder='Escreva para o prestador de serviço...' />
                        <button className='sendButton'><BsSend /></button>
                    </div>
                    <button className='voiceButton'><BsMic /></button>
                </div>
            </div>
        </main>
    )
}