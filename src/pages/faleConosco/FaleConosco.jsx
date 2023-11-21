import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './faleConosco.css';
import Header from "../../components/header/Header"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Envie o formulário para o servidor
    };
    return (
        <div>
            <Header />
            <div className="formFaleConosco">
                <h2>Fale <span>Conosco</span></h2>
                <div className="conteudoFaleConosco">
                    <aside>
                        <form className="form-contact" onSubmit={handleSubmit}>
                            <label className="label-email" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="input-email"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <label className="label-message" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="input-message"
                                id="message"
                                name="message"
                            ></textarea>
                            <button className="btn-submit" type="submit">
                                Enviar
                            </button>
                        </form>
                        <div className="meiosContatoTodos">
                            <div className="meiosContato">
                                <aside>
                                    <FaInstagram />
                                </aside>
                                <div className="contato">
                                    <h4>Instagram</h4>
                                    <a href="https://www.instagram.com/sejaumbu/">@sejaumbu</a>
                                </div>
                            </div>
                            <div className="meiosContato">
                                <aside  >
                                  <span className="iconeteste" > <FaLinkedin /></span> 
                                </aside>
                                <div className="contato">
                                    <h4>Linkedin</h4>
                                    <a href="https://www.linkedin.com/company/sejaumbu">@sejaumbu</a>
                                </div>

                            </div>
                            <div className="meiosContato">
                                <aside>
                                    <FaGithub />
                                </aside>
                                <div className="contato">
                                    <h4>Github</h4>
                                    <a href="https://github.com/sejaumbu">@sejaumbu</a>
                                </div>

                            </div>
                        </div>
                    </aside>
                    <div className="parteImagem">
                        <img className='fotoFaleConosco' src='https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ContactForm;