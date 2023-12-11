import React from 'react'
import Portfolio from '../../components/Portfolio/Portfolio'
import '../AbaPortfolio/AbaPortfolio.css'
import ItensFixo from '../../components/Portfolio/ItensFixo'

function AbaPortfolio() {
    return (
        <div className='AbaPortfolio'>

            <div className='portfolio'>
                <ItensFixo />
                <Portfolio />
            </div>

        </div>
    )
}

export default AbaPortfolio