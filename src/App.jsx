import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral.jsx';

function App() {
  return (
    <div className='wrapper'>
      <BarraLateral/>
    </div> 
  )
}

export default App;
