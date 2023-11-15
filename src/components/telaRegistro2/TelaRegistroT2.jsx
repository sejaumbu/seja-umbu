import React from "react";
import "../telaRegistro2/telaRegistroT2.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function TelaRegistroT2() {
  return (
    <div className="containerT2">
      <div className="headerT2">
        <div className="voltar">
          <span>
            <IoIosArrowBack />
          </span>
          <p>Voltar</p>
        </div>
        <div className="etapa">
          <span></span>
          <p>Etapa 01/03</p>
          <p>
            <strong>Informações Pessoais</strong>
          </p>
        </div>
      </div>
      <div className="form">
        <div className="topoRegistro">
          <h1>Registre uma conta!</h1>
          <h4>Comece a cultivar oportunidades de sucesso!</h4>
        </div>
        <label className="labelRegistro2">Email*</label>
        <input type="email" className="Inputs" placeholder="Email" />
        <label className="labelRegistro2">Crie sua senha*</label>
        <input type="password" className="Inputs" placeholder="Senha" />
        <div className="botoes">
          <div className="condicao">
            <input type="checkbox" name="Termos" className="termos" />
            <label>Eu concordo com os termos e condições</label>
          </div>
          <button id="Cadastro-Normal">Cadastrar</button>
          <div className="ou">
            <p>OU</p>
          </div>
          <button id="Cadastro-Facebook">
            <FaFacebook />
            Continuar com Facebook
          </button>
          <button id="Cadastro-Google">
            <FcGoogle />
            Continuar com Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaRegistroT2;
