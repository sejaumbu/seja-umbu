import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import UmchatF from './pages/umchat/UmchatF.jsx';
import PerfilSuperior from './components/perfilSuperior/PerfilSuperior.jsx';


function App() {
  return (
    <div className='teste'>
      <PerfilSuperior
      nota = "5,0"
      /> 
    </div>
  )
}

export default App;
