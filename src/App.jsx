import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
