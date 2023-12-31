export default function RequerimentoServicoE4(props) {
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
                <button className='btnVoltarRequerimento' onClick={props.voltarReq}>Voltar</button>
                <button className='btnAvancarRequerimento' onClick={props.avancarReq}>Avançar</button>
            </div>
        </form>
    )
}