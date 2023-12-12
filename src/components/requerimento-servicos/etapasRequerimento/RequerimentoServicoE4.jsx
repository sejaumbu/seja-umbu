import { useNavigate } from "react-router-dom";
export default function RequerimentoServicoE4() {
    const navigate = useNavigate();
    return (
        <form className='formServico1-radio'>
            <label>É um projeto de paisagismo?</label>
            <div className="btnRadioServicos">
                <input type='radio' name="paisagismoServico"/>
                <span>Sim</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="paisagismoServico"/>
                <span>Não</span>
            </div>
            <div className="bntAvancarEspaco">
                <button className='btnVoltarRequerimento'onClick={ () => navigate('/requerimento3')}>Voltar</button>
                <button className='btnAvancarRequerimento'onClick={ () => navigate('/requerimento5')}>Avançar</button>
            </div>
        </form>
    )
}