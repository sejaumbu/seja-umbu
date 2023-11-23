import './requerimentoServicos.css'
export default function RequerimentoServicos(){
    return(
        <>
            <div className='requerimentoServicos'>
                <form className='formServico1'>
                    <label>Qual serviço você procura?</label>
                    <select type='option' className='opServicos1' required>
                        <option value='' disabled selected>Selecione</option>
                        <option value='SaoPaulo'>São Paulo</option>
                        <option value='RioDeJaneiro'>Rio de Janeiro</option>
                        <option value='Brasilia'>Brasília</option>
                        <option value='Fortaleza'>Fortaleza</option>
                        <option value='Salvador'>Salvador</option>
                        <option value='BeloHorizonte'>Belo Horizonte</option>
                        <option value='Manaus'>Manaus</option>
                        <option value='Curitiba'>Curitiba</option>
                    </select>
                </form>

                <form className='formServico1-radio'>
                    <label>Qual é o tamanho do jardim?</label>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Pequeno (até 50m²)</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Médio (50m² a 100m²)</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Grande (100m² a 200m²)</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Muito grande (200m² ou mais)</span>
                    </div>          
                </form>   

                <form className='formServico1-radio'>
                    <label>Qual é o local do serviço?</label>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Casa</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Comércio/escritório</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Condomínio/prédio</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Outro</span>
                    </div>          
                </form>

                <form className='formServico1-radio'>
                    <label>É um projeto de paisagismo?</label>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Sim</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Não</span>
                    </div>        
                </form>

                <form className='formServico1-radio'>
                    <label>Quando você pretende realizar o serviço?</label>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Urgente (o quanto antes possível)</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Nos próximos 7 dias</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Nos próximos 15 dias</span>
                    </div> 
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Nos próximos 30 dias</span>
                    </div>     
                </form>

                <form className='formServico1-radio'>
                    <label>Endereço do serviço</label>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Urgente (o quanto antes possível)</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Nos próximos 7 dias</span>
                    </div>
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Nos próximos 15 dias</span>
                    </div> 
                    <div className="btnRadioServicos">
                        <input type='radio'/>
                        <span>Nos próximos 30 dias</span>
                    </div>     
                </form>

            </div>        
        </>
        
    )
}