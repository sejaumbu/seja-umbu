import React from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import { MdAddPhotoAlternate } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import './publicacao.css'

function Publicacao() {
    return (
        <div className='pageLB'>
            <BarraLateral />
            <div className="publicacao">
                <h2 className="tituloLB">Criar publicação</h2>
                <div className="iconLB">
                    <MdAddPhotoAlternate />
                </div>

                <div className="textoMeioLB">
                    <div className="textoMaiorLB">Adicionar fotos</div>
                    <div className="textoMenorLB">ou arraste e solte</div>
                </div>

                <div className="alingBottom">
                    <div className='textBottom'>
                        <div className="celularIcon"><SlScreenSmartphone /></div>
                        <p className='textoEsquerdo'>Adicione fotos do seu dispositivo móvel.</p>
                    </div>

                    <button class="botaoPublicar">Clique em Mim</button>

                </div>

            </div>

        </div>
    )
}

export default Publicacao