export default function RequerimentoServicoE3(props) {
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
                <button className='btnVoltarRequerimento' onClick={props.voltarReq}>Voltar</button>
                <button className='btnAvancarRequerimento' onClick={props.avancarReq}>Avançar</button>
            </div>
        </form>
    )
}