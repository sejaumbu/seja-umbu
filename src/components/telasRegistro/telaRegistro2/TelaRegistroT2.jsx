import React, { useState } from "react";
import "./telaRegistroT2.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { json } from "react-router-dom";

function TelaRegistroT2(props) {
    const[usuario, setUsuario] = useState({
        email: '',
        senha: '',
        endereco: 1,
        telefone: 1,
      });
    
      const aoMudar = (evento) => {        
        setUsuario({ ...usuario, [evento.target.name]: evento.target.value });
        localStorage.setItem("dataUser",JSON.stringify(usuario))
      };
      

      const handDel = (e) => {
        e.preventDefault();
      }

  return (
    <div className="containerT2">
        <form onSubmit={handDel} className="formT2">
            <div className="headerT2">
                <span><IoIosArrowBack /> Voltar</span>
                <div className="etapa">
                    <p>Etapa 01/03</p>
                    <strong>Informações Pessoais</strong>
                </div>
            </div>
            <h2>Registre uma conta!</h2>
            <h4>Comece a cultivar oportunidades de sucesso!</h4>

            <label className="labelRegistro2">Email*</label>
            <input type="email" name="email" value={usuario.email} onChange={aoMudar} className="Inputs" placeholder="Email"/>

            <label className="labelRegistro2">Crie sua senha*</label>
            <input type="password" name="senha" value={usuario.senha} onChange={aoMudar} className="Inputs" placeholder="Senha"/>

            <div className="botoes">
                <div className="termos-de-uso">
                    <input type="checkbox" name="Termos" className="termos"/>
                    <label>Eu concordo com os termos e condições</label>
                </div>
                <button className="Cadastro-Normal" onClick={props.avancarRegistro2}>Cadastrar</button>
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

export default TelaRegistroT2;
