export default function RequerimentoServicoE3() {
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
                <button className='btnVoltarRequerimento'>Voltar</button>
                <button className='btnAvancarRequerimento'>Avançar</button>
            </div>
        </form>
    )
}