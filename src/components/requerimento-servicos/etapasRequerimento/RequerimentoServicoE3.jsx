import { useNavigate } from "react-router-dom"

export default function RequerimentoServicoE3() {
    const navigate = useNavigate();
    return (
        <form className='formServico1-radio'>
            <label>Qual é o local do serviço?</label>
            <div className="btnRadioServicos">
                <input type='radio' name="localServico"/>
                <span>Casa</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="localServico"/>
                <span>Comércio/escritório</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="localServico"/>
                <span>Condomínio/prédio</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="localServico"/>
                <span>Outro</span>
            </div>
            <div className="bntAvancarEspaco">
                <button className='btnVoltarRequerimento' onClick={ () => navigate('/requerimento2')}>Voltar</button>
                <button className='btnAvancarRequerimento'onClick={ () => navigate('/requerimento4')}>Avançar</button>
            </div>
        </form>
    )
}