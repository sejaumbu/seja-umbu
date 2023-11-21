import TelaRegistroT2 from '../../components/telaRegistro2/TelaRegistroT2';
import LadoEsquerdoRegistro from "../../components/telasLogin/LadoEsquerdoRegistro"
import './Registro2.css'

export default function Registro2(){
    return (
        <div className='conteudoRegistro2'>
            <div className="login">
                <LadoEsquerdoRegistro/>
                <TelaRegistroT2/>
            </div>  
        </div>
    )
}
