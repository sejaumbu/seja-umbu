import Contatos from './Contatos';  
import '../assets/styles/UMChat.css';

export default function UMChat(){
    return(
        <main className='umchat'>
            <div className='listaContatos'>
                <h2>UMchat</h2> 
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />  
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />  
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />
                <Contatos
                    iconesContatos='https://cdn-icons-png.flaticon.com/256/149/149071.png'
                    nomeContato="Gustavo Melo"
                    dataMensagem="12:00 | 21.11"
                />
                <br/>
                <p>Veja mais</p>    
            </div>
            <div>
                <header className='headerChat'>

                </header>
            </div>
        </main>
    )
}