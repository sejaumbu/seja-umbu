import React from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import Header from '../../components/header/Header';
import "./dashboard.css"

function Dashboard() {
  
  return (
    <div className='sepador'>
      <div> <BarraLateral ></BarraLateral></div>
      <div className="main">
        <div className="abaSuperior">
          <div className="linkFuncionalidade">
            {/* alterar com foto do mockup */}
            <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="foto de chat" className="fundo" />
            <p>Conheça o UMCHAT: Négocie com segurança e facilidade</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
