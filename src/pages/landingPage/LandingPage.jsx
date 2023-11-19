import React from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import ParteFoto from "../../components/ladingPage/ParteFoto/ParteFoto.jsx"
import ParteInformacao from "../../components/ladingPage/ParteInformacao/ParteInformacao.jsx"



function LandingPage() {
    return (
        <div>
            <Header />
            <ParteFoto />
            <ParteInformacao />
            <Footer />
        </div>

    )
}

export default LandingPage;
