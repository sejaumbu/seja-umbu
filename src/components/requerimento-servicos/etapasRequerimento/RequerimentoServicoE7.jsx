export default function RequerimentoServicoE7(props){
    return(
        <form className="observacaoServico">
            <h3>Observações/descrição do serviço</h3>
            <div className="containderObservacaoServico">
                <div className="descricaoServico">
                    <label>Descrição do serviço</label>
                    <textarea rows="10" cols="40" maxlength="500" name="descricaoServico"/>
                </div>
                <div className="comentarioServico">
                    <label>Observações/Comentários</label>
                    <textarea rows="10" cols="40" maxlength="500" name="observacaoServico"/>
                </div>
            </div>
            <div className="bntAvancarEspaco">
                <button className='btnVoltarRequerimento' onClick={props.voltarReq}>Voltar</button>
                <button className='btnAvancarRequerimento' onClick={props.avancarReq}>Avançar</button>
            </div>
        </form>
    )
}
