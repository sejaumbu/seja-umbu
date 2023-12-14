
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// Import das Rotas
import LandingPage from './pages/landingPage/LandingPage';
import Notificacoes from './pages/Notificacoes/Notificacoes.jsx';
import Escalabilidade from "./pages/Escalabilidade/Escalabilidade.jsx"
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Umchat from './components/umchat/UMChat.jsx';
// import AbaDeAvaliacoes from './components/AbaDeAvaliações/AbaDeAvaliacoes.jsx';
import Perfil from './pages/perfil/Perfil.jsx';
import IdentidadeVisual from "./pages/IdentidadeVisual/IdentidadeVisualTela.jsx";
import Registro from "./pages/registro/Registro.jsx";
import Umblog from "./pages/umblog/UmblogF.jsx"
import TesteCompetencia from './pages/testeCompetencia/TesteCompetencia.jsx';
import AbaPortfolio from './pages/AbaPortfolio/AbaPortfolio.jsx';
import ElasPlantam from './pages/ElasPlantam/elasPlantam.jsx';
import Login from './pages/login/Login.jsx';
// import Publi from './pages/Publi/Publi.jsx';
import Faleconosco from './pages/faleconosco/Faleconosco.jsx';
import Editarperfil from './pages/PerfilEdit/Editarperfil.jsx';
import RequerimentoServicoE1 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE1.jsx';
import RequerimentoServicoE2 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE2.jsx';
import RequerimentoServicoE3 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE3.jsx';
import RequerimentoServicoE4 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE4.jsx';
import RequerimentoServicoE5 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE5.jsx';
import RequerimentoServicoE6 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE6.jsx';
import RequerimentoServicoE7 from './components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE7.jsx';
import Requerimento from './pages/requerimentoServicos/Requerimento.jsx';
import SobreNos from './pages/SobreNós/Sobrenos.jsx';


function App() {
  return (

    <div className="rotas">
      <BrowserRouter>
        <Routes>

          <Route path='/' Component={LandingPage} />
          <Route path='/perfil' Component={AbaPortfolio} />
          <Route path='/painelcontrole' Component={Dashboard} />
          <Route path='/escalabilidade' Component={Escalabilidade} />
          <Route path='/identidade' Component={IdentidadeVisual} />
          <Route path='/login' Component={Login}/>
          <Route path='/notificacoes' Component={Notificacoes} />
          <Route path='/perfil' Component={Perfil} />
          <Route path='/chat' Component={Umchat} />
          <Route path='/umblog' Component={Umblog} />
          <Route path='/registro' Component={Registro} />
          <Route path='/elasplantam' Component={ElasPlantam} />
          <Route path='/editar' Component={Editarperfil} />
          <Route path='/testeConhecimento' Component={TesteCompetencia} />
          {/* <Route path='/publicar' Component={Publi} /> */}
          <Route path='/faleconosco' Component={Faleconosco} />
          <Route path='/editarperfil' Component={Editarperfil} /> 
          <Route path='/requerimento1' Component={RequerimentoServicoE1} />
          <Route path='/requerimento2' Component={RequerimentoServicoE2} />
          <Route path='/requerimento3' Component={RequerimentoServicoE3} />
          <Route path='/requerimento4' Component={RequerimentoServicoE4} />
          <Route path='/requerimento5' Component={RequerimentoServicoE5} />
          <Route path='/requerimento6' Component={RequerimentoServicoE6} />
          <Route path='/requerimento7' Component={RequerimentoServicoE7} />
          <Route path='/requerimento' Component={Requerimento} />
          <Route path='/sobrenos' Component={SobreNos} /> 
        
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App;


