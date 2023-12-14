
// import React, { useEffect, useState } from 'react'
// import Portfolio from '../../components/Portfolio/Portfolio'
// import '../AbaPortfolio/AbaPortfolio.css'
// import ItensFixo from '../../components/Portfolio/ItensFixo'
// import '../../components/Portfolio/Portfolio.css'
// import AbaDeAvaliacoes from '../../components/AbaDeAvaliações/AbaDeAvaliacoes'

// function AbaPortfolio() {
//     const [renderedComponent, setRenderedComponent] = useState('Portfolio');



//     useEffect(() => {

//     }), [];

//     const changeCompoment = (component) => setRenderedComponent(component);

//     return (
//         <div className='AbaPortfolio'>

//             <div className='portfolio'>
//                 <div className="itensFixo">
//                     <div className="opcoes">
//                         <p onClick={() => changeCompoment('Portfolio')} className='pOpcoes'>Portfólio</p>
//                         <p onClick={() => changeCompoment('Avaliacoes')} className='pOpcoes'>Avaliações</p>
//                     </div>
//                     <hr />
//                 </div>
//                 {
//                     renderedComponent == 'Porfolio' && <Portfolio />
//                 }
//                 {
//                     renderedComponent == 'Avaliacoes' && <AbaDeAvaliacoes />
//                 }

//             </div>

//         </div>
//     )
// }

// export default AbaPortfolio


import React from 'react'
import Portfolio from '../../components/Portfolio/CodePortfolio/Portfolio'
import './perfil.css'
import BarraLateral from '../../components/barraLateral/BarraLateral';
import PerfilSuperior from '../../components/perfilSuperior/PerfilSuperior';


function AbaPortfolio() {
    const [renderedComponent, setRenderedComponent] = useState('Portfolio');

    useEffect(() => { }), [];

    const changeCompoment = (component) => setRenderedComponent(component);

    return (
        <div className='mainPerfil'>
            <BarraLateral/>
            <PerfilSuperior/>
            <div className='AbaPortfolio'>
                <div className='portfolio'>
                    <div className="itensFixo">
                        <div className="opcoes">
                            <p onClick={() => changeCompoment('Portfolio')} className='pOpcoes'>Portfólio</p>
                            <p onClick={() => changeCompoment('Avaliacoes')} className='pOpcoes'>Avaliações</p>
                        </div>
                        <hr />
                    </div>


                    {
                        renderedComponent == 'Porfolio' && <Portfolio />
                    }
                    {
                        renderedComponent == 'Avaliacsoes' && <AbaDeAvaliacoes />
                    }

                </div>
            </div>

        </div>
    )
}

export default AbaPortfolio