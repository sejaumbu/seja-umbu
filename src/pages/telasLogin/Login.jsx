import TelaRegistro4 from "../../components/telaRegistro4/TelaRegistro4";
import LadoEsquerdoRegistro from "../../components/telasLogin/LadoEsquerdoRegistro";
import './Login.css'
export default function Login(){
    return(
        <div className="ContainerLogin">
             <div className="login">
                <LadoEsquerdoRegistro/>
                <TelaRegistro4/>
             </div>
        </div>
    )
}