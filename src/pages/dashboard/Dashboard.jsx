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
            <a href='https://www.umentreposto.com/'><button>Acesse</button></a>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard;
