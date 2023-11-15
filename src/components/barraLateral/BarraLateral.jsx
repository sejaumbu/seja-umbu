import React from 'react'
import ItemBarra from './ItemBarra/ItemBarra.jsx';
import SuperiorCard from './superiorCard/SuperiorCard.jsx';
import { FiHome } from 'react-icons/fi';
import { BiMessage, BiHelpCircle } from 'react-icons/bi';
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart, AiOutlineHistory } from "react-icons/ai"
import { MdOutlineNotificationsActive, MdOutlineSettings } from "react-icons/md"
import { TbPhotoPlus } from "react-icons/tb"
import "../barraLateral/barraLateral.css"
import fotoJar from "../../assets/jardineiroFoto.png"


function BarraLateral() {
  return (

    <div className='barraLateral'>
      <SuperiorCard
        nomeJar="José Ferreira"
        cargo="Jardineiro"
        fotoJar={fotoJar}
      />

      <div className='itemSite'>
        <ItemBarra
          iconUrl={<FiHome />}
          nome={"Página Inicial"}
          rota={"/pagina-inicial"}
        />
        <ItemBarra
          iconUrl={<BiMessage />}
          nome={"UMChat"}
          rota={"/umchat"}
        />
        <ItemBarra
          iconUrl={<CgProfile />}
          nome={"Perfil"}
          rota={"/perfil"}
        />
        <ItemBarra
          iconUrl={<AiOutlineShoppingCart />}
          nome={"UMShop"}
          rota={"/umshop"}
        />
        <ItemBarra
          iconUrl={<MdOutlineNotificationsActive />}
          nome={"Notificações"}
          rota={"/notificacoes"}
        />
        <ItemBarra
          iconUrl={<AiOutlineHistory />}
          nome={"Historico"}
          rota={"/historico"}
        />
        <ItemBarra
          iconUrl={<TbPhotoPlus />}
          nome={"Publicar"}
          rota={"/publicar"}
        />
      </div>

      <div className='itemFinal'>
        <ItemBarra
          iconUrl={<BiHelpCircle />}
          nome={"Ajuda"}
          rota={"/ajuda"}
        />
        <ItemBarra
          iconUrl={<MdOutlineSettings />}
          nome={"Configurações"}
          rota={"/configuracoes"}
        />
      </div>


    </div>
  )
}

export default BarraLateral;
