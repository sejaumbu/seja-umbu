import React, { useState } from 'react'
import LadoEsquerdoRegistro from '../../components/telasRegistro/swiperRegistro/SwiperRegistro.jsx'
import TelaRegistro1 from '../../components/telasRegistro/telaRegistro1/TelaRegistro1.jsx'
import TelaRegistro2 from '../../components/telasRegistro/telaRegistro2/TelaRegistroT2.jsx'
import TelaRegistro3 from '../../components/telasRegistro/telaRegistro3/TelaRegistro3.jsx'
import TelaRegistro4 from '../../components/telasRegistro/telaRegistro4/TelaRegistro4.jsx'
import './registro.css';

export default function Registro() { 
  const [stateRegistro, setStateRegistro] = useState('telaRegistro1');  
  const avancar1 = () => setStateRegistro('telaRegistro2');
  const avancar2 = () => setStateRegistro('telaRegistro3');
  const avancar3 = () => setStateRegistro('telaRegistro4');
  
  return (
    <div className='conteudoRegistro1'>
      <div className="login">
        <LadoEsquerdoRegistro/>
        {
             stateRegistro == 'telaRegistro1' && <TelaRegistro1 avancarRegistro1= {avancar1}/>
          || stateRegistro == 'telaRegistro2' && <TelaRegistro2 avancarRegistro2= {avancar2}/>
          || stateRegistro == 'telaRegistro3' && <TelaRegistro3 avancarRegistro3= {avancar3}/>
          || stateRegistro == 'telaRegistro4' && <TelaRegistro4/>
        }
      </div>
    </div>
  )
}

