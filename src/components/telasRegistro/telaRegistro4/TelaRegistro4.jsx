import { FaRegCircleCheck } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import './telaRegistro4.css'
import axios from "axios";
export default function TelaRegistro4() {
    const navigate = useNavigate();
    const aoEnviar = (evento) => {
                 
         evento.preventDefault();
         axios.post('http://localhost:8080/usuario/cadastrar', JSON.parse(localStorage.getItem("dataUser")))
           .then((resposta) => {
             console.log(resposta);
            
        alert('Usuário cadastrado com sucesso!');
            localStorage.clear()
            navigate('/painelcontrole')
        })
           .catch((erro) => {
            console.error(erro);
        });
       };
    

    return (
        <div className="telaRegistro4">
            <div className="headerRT4">
                <a href="#"><p><IoIosArrowBack/> Voltar</p></a>
                <div className="etapa3">
                    <p>Etapa 03/03</p>
                    <p>Habilidades</p>
                </div>
            </div>
            <div className="containerTelaRegistro4">
                <div className="completeRt4">
                    <h3>Complete o seu perfil !</h3>
                    <span>Agora, escolha selecione suas as suas habilidades</span>
                </div>
                <span>Insira suas etiquetas</span>
                <div className="arvore-de-habilidadesRt4">
                    <button>Remoção de árvores <FaRegCircleCheck /></button>
                    <button>Podas <FaRegCircleCheck /></button>
                    <button>Manutenção <FaRegCircleCheck /></button>
                    <button>Construção de Jardim <FaRegCircleCheck /></button>
                    <button>Paisagismo <FaRegCircleCheck /></button>
                    <button>Adubação <FaRegCircleCheck /></button>
                    <button>Remoção de ervas orgânicas<FaRegCircleCheck /></button>
                    <button>Plantio e Transplante <FaRegCircleCheck /></button>
                    <button>Irrigação <FaRegCircleCheck /></button>
                    <button>Adubação e Nutrição <FaRegCircleCheck /></button>
                    <button>Manutenção de Gramados <FaRegCircleCheck /></button>
                    <button>Instalação de Sistemas de Drenagem <FaRegCircleCheck /></button>
                </div>
                <div className="enviarHabilidades">
                    <button onClick={aoEnviar}>Salvar & Continuar</button>
                    <span><CiLock/> Suas informações estão protegidas com segurança</span>
                </div>
            </div>
        </div>
    )
}