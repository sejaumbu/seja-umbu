import React, { useEffect, useState } from "react";
import "./telaRegistro3.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";


export default function telaRegistro3(props) {
    const [dataUser, setDataUser] = useState()
    useEffect(() => {
        const getDataLocalStorage = () => {
            let data = JSON.parse(localStorage.getItem("dataUser"))            
            setDataUser(data)
            console.log(data);
        }

        getDataLocalStorage()
    },[])

    const setUpdateAndress = (evento) => {    
        console.log(evento)    
        setDataUser({ ...dataUser, [evento.target.name]: evento.target.value });
        localStorage.setItem("dataUser",JSON.stringify(dataUser))
    }

    

  return (
    <div className="containerT3">
        <div className="headerT3">
            <span><IoIosArrowBack/> Voltar</span>
            <div className="etapaT3">
                <p>Etapa 02/03</p>
                <strong>Informações Pessoais</strong>
            </div>
        </div>

        <form className="formT3">
            <div className="topoRegistroT3">
                <span>Complete seu perfil</span>
                <p> Para fins de regulamentação do setor, seus dados são necessários.</p>
            </div>

            <label className="labelRegistroT3">Número</label>
            <input type="tel" name="telefone" placeholder="Número de Telefone" id="telefone" className="Inputs"  value={dataUser && dataUser.telefone} required  onChange={setUpdateAndress}/>

            <label className="labelRegistroT3">Endereço</label>
            <input type="text"  name="endereco" className="Inputs" placeholder="Digite o seu endereço" value={dataUser && dataUser.endereco} required onChange={setUpdateAndress}/>

            <label className="labelRegistroT3">Cidade</label>
            <select className="Inputs" required>
                <option value="" disabled selected>Selecione</option>
                <option value="SaoPaulo">São Paulo</option>
                <option value="RioDeJaneiro">Rio de Janeiro</option>
                <option value="Brasilia">Brasília</option>
                <option value="Fortaleza">Fortaleza</option>
                <option value="Salvador">Salvador</option>
                <option value="BeloHorizonte">Belo Horizonte</option>
                <option value="Manaus">Manaus</option>
                <option value="Curitiba">Curitiba</option>
                <option value="Recife">Recife</option>
                <option value="Goiania">Goiânia</option>
                <option value="PortoAlegre">Porto Alegre</option>
                <option value="Belem">Belém</option>
                <option value="Guarulhos">Guarulhos</option>
                <option value="Campinas">Campinas</option>
                <option value="SaoLuis">São Luís</option>
                <option value="Maceio">Maceió</option>
                <option value="CampoGrande">Campo Grande</option>
                <option value="SaoGoncalo">São Gonçalo</option>
                <option value="Teresina">Teresina</option>
                <option value="JoaoPessoa">João Pessoa</option>
            </select>

            <div className="botao-salvar">
                <button type="submit" className="salvar-continuar" onClick={props.avancarRegistro3}>Salvar & Continuar</button>
                <span><MdLockOutline /> Suas informações estão protegidas com segurança</span>
            </div>
        </form>

    </div>
  )
}
