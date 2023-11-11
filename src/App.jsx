import './App.css'
import "./components/header/header.css"
import "./components/footer/footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral';

function App() {
  return (
    <>
    <BarraLateral/>
      <Header/>
      <Footer/>
    </> 
  )
}

export default App;
