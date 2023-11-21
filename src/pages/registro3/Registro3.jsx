import TelaRegistro3 from '../../components/telaRegistro3/TelaRegistro3.jsx'
import LadoEsquerdoRegistro from "../../components/telasLogin/LadoEsquerdoRegistro"
import './Registro3.css'

export default function Registro3(){
    return (
        <div className='conteudoRegistro3'>
            <div className="login">
                <LadoEsquerdoRegistro/>
                <TelaRegistro3/>
            </div>  
        </div>
    )
}
