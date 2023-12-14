import logotipo from "../../assets/Umbu.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../header/header.css"
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();
    
    return(
        <div className="containerHeader">
            <header>
                <div className="logotipo">
                    <img src={logotipo}/>
                </div>
                <nav className="navegacao">
                    <ul className="listNav">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="/faleconosco">Fale conosco</a></li>
                        <li><a href='/umblog'>UMblog</a></li>
                        <li><a href="/sobrenos">Sobre nós</a></li>
                    </ul>
                </nav>

                <div className="buttomLogin">
                    <button type="button" class="btn btn-outline-success btn-sm" onClick={ () => navigate('/login')}   >Entrar</button>
                    <button type="button" class="btn btn-success btn-sm" onClick={ () => navigate('/registro')}>Registre-se</button>
                </div>

                {/* Drop menu responsivo ao tamanho da tela */}
                <DropdownButton id="dropdown-basic-button" title="Menu" variant="success" className="dropMenu">
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="#">Serviços</Dropdown.Item>
                    <Dropdown.Item href="/faleconosco">Fale conosco</Dropdown.Item>
                    <Dropdown.Item href="/umblog">UMblog</Dropdown.Item>
                    <Dropdown.Item href="/sobrenos">Sobre nós</Dropdown.Item>
                    <hr/>
                    <Dropdown.Item href="/registro">Login/Registro</Dropdown.Item>
                </DropdownButton>
            </header>    
        </div>    
    )
}