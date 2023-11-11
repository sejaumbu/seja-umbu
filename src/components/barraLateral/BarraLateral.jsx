import React from 'react'
import ItemBarra from './ItemBarra/Itembarra';
import { GrHomeRounded } from 'react-icons/gr';
import { BiMessage } from 'react-icons/gr';


function BarraLateral({ foto, nomeJar, cargo }) {
  return (
    <>
      <div className='cardJardineiro' >
        <img>{foto}</img>
        <h2>{nome}</h2>
        <h4>{cargo}</h4>
      </div>

      <div className='lista-nomes'>
        <ItemBarra 
          iconUrl={<GrHomeRounded/>}
          nome ={"Página Inicial"}
        />
        <ItemBarra 
          iconUrl={<BiMessage/>}
          nome ={"UMChat"}  
        />
        <ItemBarra />
        <ItemBarra />
        <ItemBarra />
        <ItemBarra />
      </div>

      <div>
      <ItemBarra />
      <ItemBarra />
  
      </div>

    </>
  )
}

export default BarraLateral;
