import BarraLateral from "../../components/barraLateral/BarraLateral";
import RequerimentoServicos from "../../components/requerimento-servicos/RequerimentoServicos";
import './requerimento.css'

export default function Requerimento(){
    return(
        <div className="requerimento">
            <BarraLateral/>
            <div className="ladoDireitoRequerimento">
                <RequerimentoServicos/>
            </div>
        </div>
    )
}