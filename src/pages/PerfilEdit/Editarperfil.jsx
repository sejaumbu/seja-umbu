import React from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import foto from "../../assets/jardineiroFoto.png";
import { SlArrowDown } from "react-icons/sl";
import { FcOk } from "react-icons/fc";
import { FaPenToSquare } from "react-icons/fa6";
import './perfil.css'

export default function Editarperfil() {
    return (
        <div className='editarPerfil'>
            <div> <BarraLateral /></div>

            <div className='Conteudo'>
                <div className='rectangle'>
                    <div className='Header'>
                        <p> Edite seu perfil</p>

                        <div className='Inf'>


                            <div className='Information'>

                                <label for="nomeInput">Nome</label>
                                <input type="text" id="nomeInput" name="nome" placeholder="Jose Ferreira"></input>



                                <label for="emailInput">Email</label>

                                <div className="input-container">
                                    <span className="icon_email">
                                        <FcOk />
                                    </span>
                                    <input
                                        type="text"
                                        id="otherInput"
                                        name="email"
                                        placeholder="Mehrabbozorgi.business@gmail.com"
                                    />
                                </div>


                                <label for="endereçoInput">Endereço</label>
                                <input type="text" id="otherInput" name="endereço" placeholder="Rua Tito 54, Vila Romana"></input>

                                <div className='Flex'>

                                    <div className='input1'>
                                        <label className='Label2' for="cidadeInput">Cidade</label>

                                        <div className="input-container">
                                            <span className="icon_cidade">
                                                <SlArrowDown />
                                            </span>
                                            <input className='Input2'
                                                type="text"
                                                id="doisInput"
                                                name="cidade"
                                                placeholder="São Paulo"
                                            />
                                        </div>
                                    </div>

                                    <div className='input2'>
                                        <label className='Label2' id='labeldois' for="estadoInput">Estado</label>
                                        <div className="input-container">
                                            <span className="icon_estado">
                                                <SlArrowDown />
                                            </span>
                                            <input className='Input2'
                                                type="text"
                                                id="doisInput"
                                                name="cidade"
                                                placeholder="São Paulo"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <label className='Passinput' for="PasswordInput">Senha</label>

                                <div className="input-container">
                                    <span className="icon">
                                        <FcOk />
                                    </span>
                                    <input
                                        type="text"
                                        id="passwordInput"
                                        name="password"
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                                <div className='butt'>
                                    <button className='Cancel'>Cancel</button>
                                    <button className='Save'>Save</button>
                                </div>

                            </div>


                            <div className='foto_inf'>
                                <img className='fotoJ' src={foto} alt="" />
                                <div className="icon-foto">
                                    <span className="icon_foto">
                                        <FaPenToSquare />
                                    </span>
                                </div>

                                <label for="ContatoInput">Contato (Número de contato)</label>
                                <input type="text" id="ultimoInput" name="Contato" placeholder="11 8002-8922"></input>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
