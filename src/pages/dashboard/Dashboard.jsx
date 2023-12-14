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
          <div className="btnPositionDashboard">
            <a href='https://wa.me/5511989107716?text=Ol%C3%A1%21+Vim+pela+%40sejaumbu%2C+gostaria+de+fazer+um+or%C3%A7amento.+%F0%9F%AA%B4%E2%98%98%EF%B8%8F'><button>Acesse</button></a>
          </div>
          <img src='https://s3-alpha-sig.figma.com/img/43df/13fa/5010cf3a3f26e5859d4f60bf2f576d11?Expires=1703462400&Signature=Cch6qbzEKs1UI61eDmNaAyUA0hW~5lgxvqwLuN6bFBaE6oIDPKoNYEtkY498BRNimuuyFmZqymaNJwC~igWfJoK7a33c1DsaUWP0bYj-n~HoXkkosRG~Y7SuWAp62wf9A-wM27yDrDWNstEf5jdv8CVkYWP6ewcd75-YFCphGsBoLxTwjprCFwqIm3aPF3YOG-IrnHdqyiDxiRyT9PhsEMnzHtQaxq3uSyF415ovOoCn4eXxm~vtY4qsgG0buE9ke11yxKHN4qI8ajLFtR9zynQax9JQ~4uycx2afZcd~WzxkGhT0zFhLhY0ylFuASlEHgClHPwFY8Rj3BdevJcjkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='Banner parceria'/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
