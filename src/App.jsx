import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import UmchatF from './pages/umchat/UmchatF.jsx';
import UmBlog from './components/UMblog/UmBlog.jsx';

function App() {
  return (
    <div>
      <Header/>
      <UmBlog/>
      <Footer/>
    </div>
  )
}

export default App;
