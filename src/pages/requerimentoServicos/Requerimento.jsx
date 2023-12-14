import BarraLateral from "../../components/barraLateral/BarraLateral";
// import RequerimentoServicos from "../../components/requerimento-servicos/RequerimentoServicos";
import RequerimentoServicos1 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE1";
import RequerimentoServicos2 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE2";
import RequerimentoServicos3 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE3";
import RequerimentoServicos4 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE4";
import RequerimentoServicos5 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE5";
import RequerimentoServicos6 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE6";
import RequerimentoServicos7 from "../../components/requerimento-servicos/etapasRequerimento/RequerimentoServicoE7";
import { useState } from "react";
import './requerimento.css'
import '../../components/requerimento-servicos/requerimentoServicos.css'

export default function Requerimento(){
    const [stateReq, setStateReq] = useState('RequerimentoServicos1');  
    const avancarReq1 = () => setStateReq('RequerimentoServicos2');
    const avancarReq2 = () => setStateReq('RequerimentoServicos3');
    const avancarReq3 = () => setStateReq('RequerimentoServicos4');
    const avancarReq4 = () => setStateReq('RequerimentoServicos5');
    const avancarReq5 = () => setStateReq('RequerimentoServicos6');
    const avancarReq6 = () => setStateReq('RequerimentoServicos7');

    return(
        <div className="requerimento">
            <BarraLateral/>
            <div className="ladoDireitoRequerimento">
                {
                       stateReq == 'RequerimentoServicos1' && <RequerimentoServicos1 avancarReq={avancarReq1} />
                    || stateReq == 'RequerimentoServicos2' && <RequerimentoServicos2 avancarReq={avancarReq2} voltarReq={avancarReq1}/>
                    || stateReq == 'RequerimentoServicos3' && <RequerimentoServicos3 avancarReq={avancarReq3} voltarReq={avancarReq2}/>
                    || stateReq == 'RequerimentoServicos4' && <RequerimentoServicos4 avancarReq={avancarReq4} voltarReq={avancarReq3}/>
                    || stateReq == 'RequerimentoServicos5' && <RequerimentoServicos5 avancarReq={avancarReq5} voltarReq={avancarReq4}/>
                    || stateReq == 'RequerimentoServicos6' && <RequerimentoServicos6 avancarReq={avancarReq6} voltarReq={avancarReq5}/>
                    || stateReq == 'RequerimentoServicos7' && <RequerimentoServicos7 />
                }
            </div>
        </div>
    )
}