import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import UmchatF from './pages/umchat/UmchatF.jsx';
import Portfolio from './pages/AbaPortfolio/AbaPortfolio.jsx';
import UmBlog from './components/UMblog/UmBlog.jsx';
import Escalabilidade from './pages/Escalabilidade/Escalabilidade.jsx';

function App() {
  return (
    <div className='teste'>
     <Escalabilidade/>
    </div>
  )
}

export default App;
