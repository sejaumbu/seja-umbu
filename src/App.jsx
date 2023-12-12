
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
import Teste from './pages/testeCompetencia/Teste.jsx';
import AbaPortfolio from './pages/AbaPortfolio/AbaPortfolio.jsx';
import Login from './pages/login/Login.jsx';
import Publi from './pages/Publi/Publi.jsx';
import Faleconosco from './pages/faleconosco/Faleconosco.jsx';
import Editarperfil from './pages/PerfilEdit/Editarperfil.jsx';


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
          <Route path='/editar' Component={Editarperfil} />
          <Route path='/testeConhecimeto' Component={Teste} />
          <Route path='/portfolio' Component={AbaPortfolio} />
          <Route path='/publicar' Component={Publi} />
          <Route path='/faleconosco' Component={Faleconosco} />
          <Route path='/editarperfil' Component={Editarperfil} />
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App;


