import React, { useState, useEffect } from 'react';
import Portfolio from '../../components/Portfolio/CodePortfolio/Portfolio';
import './perfil.css';
import BarraLateral from '../../components/barraLateral/BarraLateral';
import PerfilSuperior from '../../components/perfilSuperior/PerfilSuperior';
import AbaDeAvaliacoes from '../../components/AbaDeAvaliações/AbaDeAvaliacoes';


function Perfil() {
    const [renderedComponent, setRenderedComponent] = useState('Portfolio');

    const changeComponent = (component) => setRenderedComponent(component);

    return (
        <div className='mainPerfil'>
            <div className="barraLateral">
                <BarraLateral />
            </div>
            <div className="mainPerfilPerfil">
                <PerfilSuperior />
                <div className='AbaPortfolio'>
                    <div className='portfolio'>
                        <div className="itensFixo">
                            <div className="opcoes">
                                <p onClick={() => changeComponent('Portfolio')} className='pOpcoes'>Portfólio</p>
                                <p onClick={() => changeComponent('Avaliacoes')} className='pOpcoes'>Avaliações</p>
                            </div>
                            <hr />
                        </div>

                        {renderedComponent === 'Portfolio' && <Portfolio />}
                        {renderedComponent === 'Avaliacoes' && <AbaDeAvaliacoes />}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Perfil;
