import React from 'react'
import './estilopub.css'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
export default function Publi() {
    return (
        <div>
            <div> <BarraLateral ></BarraLateral></div>

            <div className='ConteudoCentral'>

                <div className="rectangle" >
                    <div className='header'>
                        <p> Criar publicação</p>

                        <div className='Icon'>
                            <MdAddPhotoAlternate />
                        </div>

                        <div className="text-wrapper1">Adicionar fotos</div>

                        <div className="text-wrapper2">ou arraste e solte</div>

                        
                            <div className='Finalpagina'>
                                    <div className='icon2'><IoIosPhonePortrait /></div><div className='text-w'>Adicione fotos do seu dispositivo móvel.</div><button className='Add'>Adicionar</button>
                                
                            </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
