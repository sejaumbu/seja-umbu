import React from "react";
import "./telaRegistroContratanteT2.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function TelaRegistroContratanteT2(props) {
  return (
    <div className="containerT2">
        <div className="headerT2">
            <span><IoIosArrowBack /> Voltar</span>
            <div className="etapa">
                <p>Etapa 01/02</p>
                <strong>Informações Pessoais</strong>
            </div>
        </div>

        <form className="formT2">
            <h2>Registre uma conta!</h2>
            <h4>Comece a cultivar oportunidades de sucesso!</h4>

            <label className="labelRegistro2">Email*</label>
            <input type="email" className="Inputs" placeholder="Email" required/>

            <label className="labelRegistro2">Crie sua senha*</label>
            <input type="password" className="Inputs" placeholder="Senha" required/>

            <div className="botoes">
                <div className="termos-de-uso">
                    <input type="checkbox" name="Termos" className="termos" required/>
                    <label>Eu concordo com os termos e condições</label>
                </div>
                <button className="Cadastro-Normal" onClick={props.avancarRegistroContratante}>Cadastrar</button>
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

export default TelaRegistroContratanteT2;
