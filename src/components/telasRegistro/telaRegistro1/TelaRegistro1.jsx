import './telaRegistro1.css';
import { IoPersonOutline } from "react-icons/io5";
import { LuShovel } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";

export default function telaRegistro1({avancarRegistroContratante, avancarRegistro1}) {
    return (
        <div className="ConteudoDireito">
            <div className='header'> 
                <p>Já possui uma conta? <a className="entrar" href="/login">Entrar</a></p> 
            </div>
           
            <div className='container-conteudoDireito'>

                <div className="tituloRegistro">
                    <h3>Junte-se a nós!</h3>
                    <p>Para começar esta jornada, diga-nos que tipo de conta <br /> você estaria abrindo</p>
                </div>

                <button className='botaoCompleto' onClick={avancarRegistroContratante}>
                    <span className='iconeTipoConta'><IoPersonOutline /></span>
                    <div className="descricaoTexto">
                       <h4>Contratante</h4>
                       <p>Encontre os melhores profissionais para o seu jardim!</p>
                    </div>
                    <SlArrowRight />
                </button>

                <button className='botaoCompleto' onClick={avancarRegistro1}>
                    <span className='iconeTipoConta'><LuShovel /></span>
                    <div className="descricaoTexto">
                        <h4>Jardineiro</h4>
                        <p>Transforme um jardim!</p>
                    </div>
                    <SlArrowRight />
                </button>
            </div>
        </div>
    )
}