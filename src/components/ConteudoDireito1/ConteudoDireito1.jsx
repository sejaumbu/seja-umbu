import './conteudoDireito.css';
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuShovel } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";


import Botao from './botao/Botao';

export default function ConteudoDireito1() {
    return (
        <div className="ConteudoDireito">
            <header className='header'> <p>Já possui uma conta? <a className="entrar" href="/login">Entrar</a></p> </header>
            <div className='container'>

                <div className="titulo">
                    <h2 className=''>Junte-se a nós!</h2>
                    <p className='paragrafo'>Para começa esta jornada, diga-nos que tipo de conta <br /> você estaria abrindo</p>
                </div>


                <Botao
                    icone={<IoPersonOutline />} conta="Contrante"
                    descricao="Encontre os melhores profissionais para o seu jardim!" 
                    avanca={<SlArrowRight />}
                />



                <Botao
                    icone={<LuShovel />} conta="Jardineiro"
                    descricao="Transforme um jardim!" 
                    avanca={<SlArrowRight />}
                    // path= "/loginJardineiro"
                />


            </div>

        </div>





    )
}