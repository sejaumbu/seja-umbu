import { AiOutlineMore } from "react-icons/ai";
export default function Mensagens(){
    return(
        <>
            <div className="headerMensagens">
                <div className="infoContato">
                    <img src='https://cdn-icons-png.flaticon.com/256/149/149071.png' className="fotoContato"/>
                    <p>Gustavo de Melo Fernandes</p>
                </div>
                <button className="messageActions"><AiOutlineMore/></button>
            </div>
            <div className="areaChat">
                {/* Simulação de um bate-papo por chat ao vivo */}
                <p className="data-do-chat">Hoje</p>
                <Enviar enviar='Boa tarde, gostaria de solicitar um serviço de Poda'/>
                <Enviar enviar='Ouvi falar muito bem do senhor'/>
                <Receber receber='Boa tarde, qual seria o nível do trabalho?'/>
                <Receber receber='Preciso saber em metros quadrados o que o senhor deseja'/>
                <Enviar enviar='No caso eu tenho o meu pequeno jardim, coisa de 2M quadrados'/>
                <Enviar enviar='Algumas rosas as quais eu me importo muito'/>
                <Enviar enviar='Queria saber um pouco mais sobre o preço'/>
                <Receber receber='O preço é fornecido antes de entrar em contato senhor...'/>
                <Receber receber='Aqui só falaremos das ferramentas para realizar o trabalho'/>
                <Enviar enviar='Entendo, vou fazer uma nova simulação'/>
            </div>  
        </>
    )
}

export function Enviar(props){
    return(
        <div className="enviado-content">
            <div className="enviadoContainer">
                <p className="enviado">{props.enviar}</p>
                <p>13:21</p>
            </div>
        </div>
    )   
}

export function Receber(props){
    return(
        <div className="receber-content">
            <div className="receberContainer">
                <p className="receber">{props.receber}</p>
                <p>13:21</p>
            </div>
        </div>
    )
}

