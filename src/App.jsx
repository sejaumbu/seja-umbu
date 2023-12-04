
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import das Rotas
import LandingPage from './pages/landingPage/LandingPage';
import Notificacoes from './pages/Notificacoes/Notificacoes.jsx';
import Escalabilidade from "./pages/Escalabilidade/Escalabilidade.jsx"
import Dashboard from './pages/dashboard/Dashboard.jsx';
import UmchatF from './pages/umchat/UmchatF.jsx';
// import AbaDeAvaliacoes from './components/AbaDeAvaliações/AbaDeAvaliacoes.jsx';
// import Perfil from './pages/perfil/Perfil.jsx';
import IdentidadeVisual from "./pages/IdentidadeVisual/IdentidadeVisualTela.jsx"
import Umblog from "./pages/umblog/UmblogF.jsx"
function App() {
  return (

    <div className="rot">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ LandingPage }/>
          <Route path='/chat' Component={ UmchatF }/>
          <Route path='/identidade' Component={ IdentidadeVisual }/>
          <Route path='/dashboard' Component={ Dashboard }/>
          <Route path='/escalabilidade' Component={ Escalabilidade }/>
          <Route path='/notificacao' Component={ Notificacoes }/>
          <Route path='/blog' Component={ Umblog }/>
          <Route path='/login' Component={ Umblog }/>


          
        </Routes>
    </BrowserRouter>


    </div>
    
  )
}

export default App;


