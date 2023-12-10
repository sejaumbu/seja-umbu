export default function RequerimentoServicoE6(){
    return(
        <form className="enderecoServico">
            <h3>Endereço do serviço</h3>
            <div className="cepRequerimento">
                <label>CEP</label>
                <input type='text' placeholder='Ex: 123567-890'/>
            </div>
            <div className="enderecoRequerimento">
                <label>Endereço</label>
                <input type='text' placeholder='Ex: Rua 123, N° 230, centro'/>
            </div>
            <div className="localRequerimento">
                <div className="cidadeRequerimento">
                    <label>Cidade</label>
                    <input type='text' placeholder='Ex: Rua 123, N° 230, centro'/>
                </div>
                <div className="estadoRequerimento">
                    <label>Estado</label>
                    
                    <select className="Inputs" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="SaoPaulo">São Paulo</option>
                        <option value="RioDeJaneiro">Rio de Janeiro</option>
                        <option value="Brasilia">Brasília</option>
                        <option value="Fortaleza">Fortaleza</option>
                        <option value="Salvador">Salvador</option>
                        <option value="BeloHorizonte">Belo Horizonte</option>
                        <option value="Manaus">Manaus</option>
                        <option value="Curitiba">Curitiba</option>
                        <option value="Recife">Recife</option>
                        <option value="Goiania">Goiânia</option>
                        <option value="PortoAlegre">Porto Alegre</option>
                        <option value="Belem">Belém</option>
                        <option value="Guarulhos">Guarulhos</option>
                        <option value="Campinas">Campinas</option>
                        <option value="SaoLuis">São Luís</option>
                        <option value="Maceio">Maceió</option>
                        <option value="CampoGrande">Campo Grande</option>
                        <option value="SaoGoncalo">São Gonçalo</option>
                        <option value="Teresina">Teresina</option>
                        <option value="JoaoPessoa">João Pessoa</option>
                    </select>
                </div>
            </div>
            <div className="bntAvancarEspaco">
                <button className='btnVoltarRequerimento'>Voltar</button>
                <button className='btnAvancarRequerimento'>Avançar</button>
            </div>
        </form>
    )
}