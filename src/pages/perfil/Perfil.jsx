import React, { useEffect, useState } from 'react'
import Dashboard from '../dashboard/Dashboard'
import PerfilSuperior from "../../components/perfilSuperior/PerfilSuperior"
import "./perfilSuperior.css"
import Portfolio from "../../components/Portfolio/Portfolio"
import ItensFixo from '../../components/Portfolio/ItensFixo'
import AbaDeAvaliacoes from '../../components/AbaDeAvaliações/AbaDeAvaliacoes'


function Perfil() {
    const [teste, setTeste] = useState("Portfolio")
    const handleComponent = () => {
        console.log(teste)
        console.log(teste)
    }
    useEffect(()=>{
        handleComponent();
    });

    return (

        <div>
            <Dashboard />
            <div className="mainPerfil">
                <PerfilSuperior />
                <ItensFixo />
                {
                    teste == "AbaDeAvaliacoes" &&  <AbaDeAvaliacoes />
                }

                {
                    teste == "Portfolio" &&  <Portfolio />
                }
               
               

            </div>


        </div>
    )
}

export default Perfil