import React from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import Header from '../../components/header/Header';
import "./dashboard.css"

function Dashboard() {
  
  return (
    <div className='divisaoTelaDash'>
      <div className="menuDash">
        <BarraLateral/>
      </div>
      <div className="conteudoDashboard">
        <div className="funcionalidadesDashboard">
          <div className="servicoDash1">
              <h3>Conheça o UMCHAT:</h3>
              <h3>Négocie com segurança e facilidade</h3>
          </div>
          <div className="servicoDash2">
              <h3>Conheça o Perfil:</h3>
              <h3>Négocie com segurança e facilidade</h3>
          </div>
          <div className="servicoDash3">
              <h3>Conheça o Portfólio:</h3>
              <h3>Négocie com segurança e facilidade</h3>
          </div>
        </div>
        <div className="parceriaDash">
            <a href='https://wa.me/5511989107716?text=Ol%C3%A1%21+Vim+pela+%40sejaumbu%2C+gostaria+de+fazer+um+or%C3%A7amento.+%F0%9F%AA%B4%E2%98%98%EF%B8%8F'><button>Acesse</button></a>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard;
