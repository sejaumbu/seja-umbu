import { useNavigate } from "react-router-dom";

export default function RequerimentoServicoE2() {
    const navigate = useNavigate();

    return (
        <form className='formServico1-radio'>
            <label>Qual é o tamanho do jardim?</label>
            <div className="btnRadioServicos">
                <input type='radio' name="tamanhoJardim"/>
                <span>Pequeno (até 50m²)</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="tamanhoJardim"/>
                <span>Médio (50m² a 100m²)</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="tamanhoJardim"/>
                <span>Grande (100m² a 200m²)</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="tamanhoJardim"/>
                <span>Muito grande (200m² ou mais)</span>
            </div>
            <div className="bntAvancarEspaco">
                <button className='btnVoltarRequerimento' onClick={ () => navigate('/requerimento1')}>Voltar</button>
                <button className='btnAvancarRequerimento' onClick={ () => navigate('/requerimento3')}>Avançar</button>
            </div>
        </form>
    )

}