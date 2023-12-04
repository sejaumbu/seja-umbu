import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import PerfilSuperior from "../../components/perfilSuperior/PerfilSuperior"
import "./perfilSuperior.css"
import Portfolio from "../../components/Portfolio/Portfolio"

function Perfil() {
    return (
        <div>
            <Dashboard />

            <div className="mainPerfil">
                <PerfilSuperior />
                <Portfolio/>
            </div>


        </div>
    )
}

export default Perfil