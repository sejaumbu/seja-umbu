import LadoEsquerdoRegistro from "../../components/telasRegistro/swiperRegistro/SwiperRegistro";
import TelaRegistro2 from '../../components/telasRegistro/telaRegistro2/TelaRegistroT2';
import './registro2.css';

export default function Registro2(){
    return (
        <div className='conteudoRegistro2'>
            <div className="login">
                <LadoEsquerdoRegistro/>
                <TelaRegistro2/>
            </div>  
        </div>
    )
}
