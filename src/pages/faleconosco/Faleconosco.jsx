import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './Faleconosco.css'; // Import the CSS file for styling
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { SlCalender } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";


function Faleconosco() {
  const [state, handleSubmit] = useForm("xbjverjr");

  if (state.succeeded) {
    return console.log("Obrigado por entrar em contato! Em breve retornaremos sua mensagem.");
  }
  return (
    <div className="divFuncional">
      <Header />
      <div className="divFaleconosco">

        <div className="bodyFaleconosco">
          <div className="lateralEsquerdaFale">
            <h1 className="faleconosco-title">Fale conosco</h1>
            <h2 className="faleconosco-subtitle">Deixe sua mensagem</h2>
            <p className="faleconosco-text">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
            <div className="formularioCompleto">
              <form className="faleconosco-form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Insira seu email:</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="faleconosco-input"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <label htmlFor="email"> Deixe sua mensagem:</label>

                <textarea
                  id="message"
                  name="message"
                  className="faleconosco-textarea"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className="faleconosco-button">Enviar</button>
              </form>
            </div>


          </div>

        </div>
        <div className="ladoDireitoFaleconosco">
          {/* <img className="imgFaleconosco" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/db/ab/0d/jardineira-grill.jpg" alt="imagem de uma mulher regando uma planta" /> */}

        </div>

      </div>


      <Footer />
    </div>

  )
}


export default Faleconosco;
