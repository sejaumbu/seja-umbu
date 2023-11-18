import TelaRegistro4 from "../../components/telaRegistro4/TelaRegistro4";
import LadoEsquerdoRegistro from "../../components/telasLogin/LadoEsquerdoRegistro";
import './Registro4.css'
export default function Registro4(){
    return(
        <div className="ContainerLogin">
             <div className="login">
                <LadoEsquerdoRegistro/>
                <TelaRegistro4/>
             </div>
        </div>
    )
}