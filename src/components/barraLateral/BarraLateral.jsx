import React from 'react'
import ItemBarra from './ItemBarra/ItemBarra.jsx';
import SuperiorCard from './superiorCard/SuperiorCard.jsx';
import { GrHomeRounded } from 'react-icons/gr';
import { BiMessage, BiHelpCircle } from 'react-icons/bi';
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart, AiOutlineHistory } from "react-icons/ai"
import { MdOutlineNotificationsActive, MdOutlineSettings } from "react-icons/md"
import { TbPhotoPlus } from "react-icons/tb"
import "./barraLateral.css"
import fotoJar from "../../assets/jardineiroFoto.png"

function BarraLateral() {
  return (
    <div className='barraLateral'>
      
      <SuperiorCard
      nomeJar = "José Ferreira"
      cargo = "Jardineiro"
      fotoJar = {fotoJar}
      />

      <div className='itemSite'>
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

      <div className='itemFinal'>
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
