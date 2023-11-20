import './telaRegistro1.css';
import { IoPersonOutline } from "react-icons/io5";
import { LuShovel } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";


export default function ConteudoDireito1() {
    return (
        <div className="ConteudoDireito">
            <div className='header'> 
                <p>Já possui uma conta? <a className="entrar" href="/login">Entrar</a></p> 
            </div>
           
            <div className='container-conteudoDireito'>

                <div className="titulo">
                    <h2 className=''>Junte-se a nós!</h2>
                    <p className='paragrafo'>Para começa esta jornada, diga-nos que tipo de conta <br /> você estaria abrindo</p>
                </div>

                <button className='botaoCompleto'> 
                    <span className='iconeTipoConta'><IoPersonOutline /></span>
                    <div className="descricaoTexto">
                       <h4>Contratante</h4>
                       <p>Encontre os melhores profissionais para o seu jardim!</p>
                    </div>
                    <SlArrowRight />
                </button>


                <button className='botaoCompleto'> 
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