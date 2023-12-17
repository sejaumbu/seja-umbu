
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
import IdentidadeVisual from "./pages/IdentidadeVisual/IdentidadeVisualTela.jsx";
import Registro from "./pages/registro/Registro.jsx";
import Umblog from "./pages/umblog/UmblogF.jsx"
import TesteCompetencia from './pages/testeCompetencia/TesteCompetencia.jsx';
import ElasPlantam from './pages/ElasPlantam/elasPlantam.jsx';
import Login from './pages/login/Login.jsx';
import Publi from './pages/Publicacao/Publicacao.jsx';
import Faleconosco from './pages/faleconosco/Faleconosco.jsx';
import Editarperfil from './pages/PerfilEdit/Editarperfil.jsx';
import Perfil from './pages/perfil/Perfil.jsx'
import Requerimento from './pages/requerimentoServicos/Requerimento.jsx';
import SobreNos from './pages/SobreNós/Sobrenos.jsx';
import Pagamento from './pages/Pagamento/Pagamento.jsx';


function App() {
  return (

    <div className="rotas">
      <BrowserRouter>
        <Routes>

          <Route path='/' Component={LandingPage} />
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
          <Route path='/publicar' Component={Publi} />
          <Route path='/faleconosco' Component={Faleconosco} />
          <Route path='/editarperfil' Component={Editarperfil} /> 
          <Route path='/requerimento' Component={Requerimento} />
          <Route path='/sobrenos' Component={SobreNos} /> 
          <Route path='/pagamento' Component={Pagamento}/>
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App;


