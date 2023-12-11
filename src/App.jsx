
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Editarperfil from"./pages/PerfilEdit/Editarperfil.jsx"

// Import das Rotas
import LandingPage from './pages/landingPage/LandingPage';
import Notificacoes from './pages/Notificacoes/Notificacoes.jsx';
import Escalabilidade from "./pages/Escalabilidade/Escalabilidade.jsx"
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Umchat from './components/umchat/UMChat.jsx';
// import AbaDeAvaliacoes from './components/AbaDeAvaliações/AbaDeAvaliacoes.jsx';
// import Perfil from './pages/perfil/Perfil.jsx';
import IdentidadeVisual from "./pages/IdentidadeVisual/IdentidadeVisualTela.jsx";
import Registro from "./pages/registro/Registro.jsx";
import Umblog from "./pages/umblog/UmblogF.jsx"
import Teste from './pages/testeCompetencia/Teste.jsx';
import AbaPortfolio from './pages/AbaPortfolio/AbaPortfolio.jsx';

function App() {
  return (

    <div className="rotas">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/chat' Component={Umchat} />
          <Route path='/identidade' Component={IdentidadeVisual} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/escalabilidade' Component={Escalabilidade} />
          <Route path='/notificacoes' Component={Notificacoes} />
          <Route path='/umblog' Component={Umblog} />
          <Route path='/registro' Component={ Registro }/>
          <Route path='/editar' Component={Editarperfil}/>
          <Route path='/perfil' Component={AbaPortfolio}/>
          <Route path='/teste' Component={Teste}/>
        </Routes>
      </BrowserRouter>
    

      

    </div>

  )
}

export default App;


