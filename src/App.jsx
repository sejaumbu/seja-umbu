import './App.css'
import "./components/header/header.css"
import "./components/footer/footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral';
import fotoJar from "./assets/jardineiroFoto.png";




function App() {
  return (
    <>
      <BarraLateral
     fotoJar = {fotoJar}
      nomeJar = "José Ferreira"
      cargo = "Jardineiro"
      />
    </> 
  )
}

export default App;
