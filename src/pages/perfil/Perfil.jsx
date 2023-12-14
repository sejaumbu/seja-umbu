import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import PerfilSuperior from "../../components/perfilSuperior/PerfilSuperior"
import "./perfilSuperior.css"
import AbaPortfolio from '../AbaPortfolio/AbaPortfolio'

function Perfil() {
    return (
        <div>
            <Dashboard />

            <div className="mainPerfil">
                <PerfilSuperior />
                <AbaPortfolioPortfolio/>
            </div>


        </div>
    )
}

export default Perfil