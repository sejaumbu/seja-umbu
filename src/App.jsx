import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import UmchatF from './pages/umchat/UmchatF.jsx';
import AbaDeAvaliacoes from './components/AbaDeAvaliações/AbaDeAvaliacoes.jsx';
import Registro1 from './pages/registro1/Registro1.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/teste2' Component={ Registro1 } />
      </Routes>
      {/* <div className='teste'>
        {/* <UmchatF/>
        <Header />
        <Footer />
        </div> */}
    </BrowserRouter> 
    
  )
}

export default App;
