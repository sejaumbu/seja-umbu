import React from 'react'
import ItemBarra from './ItemBarra/Itembarra';
import { GrHomeRounded } from 'react-icons/gr';
import { BiMessage, BiHelpCircle } from 'react-icons/Bi';
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart, AiOutlineHistory } from "react-icons/ai"
import { MdOutlineNotificationsActive, MdOutlineSettings } from "react-icons/md"
import { TbPhotoPlus } from "react-icons/tb"
import "./barraLateral.css"



function BarraLateral({ fotoJar, nomeJar, cargo }) {
  return (
    <div className='barraLateral'>
      <div className='cardJardineiro' >
        <img src={fotoJar} alt='Foto de perfil do jardineiro'/>
        <h4>{nomeJar}</h4>
        <h2>{cargo}</h2>
      </div>

      <div className='itenSite'>
        <ItemBarra
          iconUrl={<GrHomeRounded />}
          nome={"Página Inicial"}
        />
        <ItemBarra
          iconUrl={<BiMessage />}
          nome={"UMChat"}
        />
        <ItemBarra iconUrl={<CgProfile />} nome={"Perfil"}
  />
        <ItemBarra
          iconUrl={<AiOutlineShoppingCart />}
          nome={"UMShop"}
        />
        <ItemBarra
          iconUrl={<MdOutlineNotificationsActive />}
          nome={"Notificações"}
        />
        <ItemBarra
          iconUrl={<AiOutlineHistory />}
          nome={"Historico"}
        />
        <ItemBarra
          iconUrl={<TbPhotoPlus />}
          nome={"Publicar"}
        />


      </div>

      <div className='itensFinal'>
        <ItemBarra
          iconUrl={<BiHelpCircle />}
          nome={"Ajuda"}
        />
        <ItemBarra
          iconUrl={<MdOutlineSettings />}
          nome={"Configurações"}
        />

      </div>

    </div>
  )
}

export default BarraLateral;
