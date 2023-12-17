import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { FcOk } from "react-icons/fc";
import { FaPix } from "react-icons/fa6";
import { CiBarcode } from "react-icons/ci";
import "./pagamento.css"
function Pagamento() {
    return (

        <div>
            <h1 className="tituloFP">Forma de Pagamento</h1>
            <div className='form_De_Pagemnto'>

                <div className='primeiroBox'>
                    <div className='box_pagamento'>
                        <div className='bordaa'>
                            <div className="icone">
                                <CiCreditCard1 />
                            </div>


                            <h2 className='Add'>Cartão de Crédito/Débito</h2>

                        </div>

                        <div className='bordaa2'>
                            <div className="icone">
                                <CiBarcode />
                            </div>


                            <h2 className='Add'>Boleto</h2>

                        </div>

                        <div className='bordaa2'>
                            <div className="icone">
                                <FaPix />
                            </div>


                            <h2 className='Add'>Pix</h2>

                        </div>
                    </div>



                    <div className='Information'>

                        <label for="numeroInput">Número do cartão</label>
                        <input type="text" id="numeroInput" name="numero" placeholder="Numero Cartao"></input>


                        <label for="cpfInput">CPF</label>
                        <input type="text" id="cpfInput" name="cpf" placeholder="CPF Titular"></input>

                        <div className='Flex'>

                            <div className='input1'>
                                <label className='Label2' for="ValidadeInput">Validade</label>

                                <div className="input-container">

                                    <input className='Input2'
                                        type="text"
                                        id="doisInput"
                                        name="Validade"
                                        placeholder="Validade do Cartão"
                                    />
                                </div>
                            </div>

                            <div className='input2'>
                                <label className='Label2' id='labeldois' for="CVVInput">CVV</label>
                                <div className="input-container">

                                    <input className='Input2'
                                        type="text"
                                        id="doisInput"
                                        name="CVV"
                                        placeholder="CVV"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='acordo'>
                        <div className='acordoIcon'><FcOk /></div>salvar dados para próximo serviço !
                    </div>

                </div>


                <div className='box-segundo'>
                    <h2 className='textEsquedo'>Resumo do Pedido</h2>

                    <div className="box">
                        <div className="preco">
                            <p className='mensal'>Mensal</p>
                            <p className="text-mes">
                                Jardine com Paixão Mês a Mês: Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo.
                            </p>
                            <p className='valor'>R$38,90/mes</p>
                        </div>
                    </div>

                    <h1 className='produto'>produto</h1>
                    <div className='espacamento'>
                        <p>total</p>
                        <p> R$38,90 </p>
                    </div>

                    <button className='finalizar'>Finalizar</button>

                </div>
            </div>

        </div>

    )
}

export default Pagamento
