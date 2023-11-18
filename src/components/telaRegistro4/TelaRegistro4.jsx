import { FaRegCircleCheck } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
export default function TelaRegistro4() {
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
                    <button>Controle de pragas <FaRegCircleCheck /></button>
                    <button>Adubação <FaRegCircleCheck /></button>
                    <button>Teste <FaRegCircleCheck /></button>
                    <button>Controle de pragas <FaRegCircleCheck /></button>
                    <button>Adubação <FaRegCircleCheck /></button>
                    <button>Teste <FaRegCircleCheck /></button>
                    <button>Controle de pragas <FaRegCircleCheck /></button>
                    <button>Adubação <FaRegCircleCheck /></button>
                    <button>Teste <FaRegCircleCheck /></button>
                    <button>Controle de pragas <FaRegCircleCheck /></button>
                    <button>Adubação <FaRegCircleCheck /></button>
                    <button>Teste <FaRegCircleCheck /></button>
                </div>
                <div className="enviarHabilidades">
                    <button>Salvar & Continuar</button>
                    <span><CiLock/> Suas informações estão protegidas com segurança</span>
                </div>
            </div>
        </div>
    )
}