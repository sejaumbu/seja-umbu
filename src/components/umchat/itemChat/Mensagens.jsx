import { AiOutlineMore } from "react-icons/ai";
export default function Mensagens() {
    return (
        <>
            <div className="headerMensagens">
                <div className="infoContato">            

                  <img  className='fotoConversa' src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"/>
                    <p>Rafaela Silva</p>
                </div>
                <button className="messageActions"><AiOutlineMore /></button>
            </div>
            <div className="areaChat">
                {/* Simulação de um bate-papo por chat ao vivo */}
                <p className="data-do-chat">Hoje</p>
                <Enviar enviar='Boa tarde, gostaria de solicitar um serviço de Poda' />
                <Enviar enviar='Ouvi falar muito bem do senhor' />
                <Receber receber='Boa tarde, qual seria o nível do trabalho?' />
                <Receber receber='Preciso saber em metros quadrados o que o senhor deseja' />
                <Enviar enviar='No caso eu tenho o meu pequeno jardim, coisa de 2M quadrados' />
                <Enviar enviar='Algumas rosas as quais eu me importo muito' />
                <Enviar enviar='Queria saber um pouco mais sobre o preço' />
                <Receber receber='O preço é fornecido antes de entrar em contato senhor...' />
                <Receber receber='Aqui só falaremos das ferramentas para realizar o trabalho' />
                <Enviar enviar='Entendo, vou fazer uma nova simulação' />
                <Receber receber='Ótimo! Se precisar de mais informações ou se tiver alguma preferência específica para a poda, estou à disposição.' />
                <Enviar enviar='Agradeço pela disponibilidade! Quais são as ferramentas que costuma utilizar para esse tipo de trabalho?' />
                <Receber receber='Utilizo tesouras de poda de alta qualidade, além de serrote para galhos mais grossos. Também tenho equipamentos de segurança para garantir um serviço eficiente e seguro.' />
                <Receber receber='Posso agendar uma visita para avaliar o local e discutir mais detalhes pessoalmente?' />
                <Enviar enviar='Claro, seria ótimo! Quando você estaria disponível para a visita?' />
                <Receber receber='Estou livre na próxima semana. Podemos marcar para terça-feira às 14h?' />
                <Enviar enviar='Perfeito! Agendei a visita para terça-feira às 14h. Aguardo ansiosamente para discutirmos os detalhes.' />
                <Receber receber='Excelente! Estou ansioso para trabalharmos juntos. Até terça-feira!' />
                <Enviar enviar='Até terça-feira! Tenha um bom dia.' />

            </div>
        </>
    )
}

export function Enviar(props) {
    return (
        <div className="enviado-content">
            <div className="enviadoContainer">
                <p className="enviado">{props.enviar}</p>
                <p>13:21</p>
            </div>
        </div>
    )
}

export function Receber(props) {
    return (
        <div className="receber-content">
            <div className="receberContainer">
                <p className="receber">{props.receber}</p>
                <p>13:21</p>
            </div>
        </div>
    )
}

