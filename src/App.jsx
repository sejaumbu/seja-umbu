import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import BarraLateral from './components/barraLateral/BarraLateral.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';


function App() {
  return (
    <div className='wrapper'>
      <Dashboard/>
    </div> 
  )
}

export default App;
