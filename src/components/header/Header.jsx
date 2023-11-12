import logotipo from "../../assets/Umbu.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Header(){
    return(
        <div className="containerHeader">
            <header>
                <div className="logotipo">
                    <img src={logotipo}/>
                </div>
                <nav className="navegacao">
                    <ul className="listNav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#">UMblog</a></li>
                        <li><a href="#">Sobre nós</a></li>
                    </ul>
                </nav>

                <div className="buttomLogin">
                    <button type="button" class="btn btn-outline-success btn-sm">Entrar</button>
                    <button type="button" class="btn btn-success btn-sm">Cadastre-se</button>
                </div>

                {/* Drop menu responsivo ao tamanho da tela */}
                <DropdownButton id="dropdown-basic-button" title="Menu" variant="success" className="dropMenu">
                    <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Serviços</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Fale conosco</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">UMblog</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sobre nós</Dropdown.Item>
                    <hr/>
                    <Dropdown.Item href="#/action-3">Login/Registro</Dropdown.Item>
                </DropdownButton>
            </header>    
        </div>    
    )
}