export default function RequerimentoServicoE5() {
    return (
        <form className='formServico1-radio'>
            <label>Quando você pretende realizar o serviço?</label>
            <div className="btnRadioServicos">
                <input type='radio' name="dataServico"/>
                <span>Urgente (o quanto antes possível)</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="dataServico"/>
                <span>Nos próximos 7 dias</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="dataServico"/>
                <span>Nos próximos 15 dias</span>
            </div>
            <div className="btnRadioServicos">
                <input type='radio' name="dataServico"/>
                <span>Nos próximos 30 dias</span>
            </div>
            <div className="bntAvancarEspaco">
                <button className='btnVoltarRequerimento'>Voltar</button>
                <button className='btnAvancarRequerimento'>Avançar</button>
            </div>
        </form>
    )
}