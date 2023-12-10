import "./telaLogin.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function TelaLogin1(){
    return(
        <div className="containerLogin">
            <div className="headerLogin">
                <span><IoIosArrowBack /> Voltar</span>
            </div>

            <form className="formLogin">
                <h2>Entre na sua conta!</h2>

                <div className="divisaoLogin">
                    <label className="labelRegistro2">Email*</label>
                    <input type="email" className="Inputs" placeholder="Email" required/>

                    <label className="labelRegistro2">Insira a sua senha</label>
                    <input type="password" className="Inputs" placeholder="Senha" required/>
                </div>

                <div className="botoes">
                    <button className="btnLogar">Logar</button>
                    <span>OU</span>
                    <div className="responsividadeBotoes">
                        <button className="Cadastro-Facebook"><FaFacebook /> <span>Continuar com Facebook</span></button>
                        <button className="Cadastro-Google"><FcGoogle /><span>Continuar com Google </span></button>
                    </div>
                </div>
            </form>       
        </div>
    )
}