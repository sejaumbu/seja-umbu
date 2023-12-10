// Imports referente as etapas no processo de requerimento:
import RequerimentoServicoE1 from './etapasRequerimento/RequerimentoServicoE1'
import RequerimentoServicoE2 from './etapasRequerimento/RequerimentoServicoE2'
import RequerimentoServicoE3 from './etapasRequerimento/RequerimentoServicoE3'
import RequerimentoServicoE4 from './etapasRequerimento/RequerimentoServicoE4'
import RequerimentoServicoE5 from './etapasRequerimento/RequerimentoServicoE5'
import RequerimentoServicoE6 from './etapasRequerimento/RequerimentoServicoE6'
import RequerimentoServicoE7 from './etapasRequerimento/RequerimentoServicoE7'
import './requerimentoServicos.css'
export default function RequerimentoServicos(){
    return(
        <>
            <RequerimentoServicoE1/>
            <RequerimentoServicoE2/>
            <RequerimentoServicoE3/>
            <RequerimentoServicoE4/>
            <RequerimentoServicoE5/>
            <RequerimentoServicoE6/>
            <RequerimentoServicoE7/>     
        </>
        
    )
}