import React from 'react'
import './teste.css'
import geranio from '../../assets/flores/Geranio.svg'

function Teste() {
  return (
    <div>

      <h2>Teste de Competência</h2>

      <div className='page'>

        <h3>1- Em relação a adubação, é INCORRETO afirmar que:</h3>

        <div className='boxInput'>
          <input type='radio' name='questao1' value='A' className='respostasInput' />
          <p>A) A adubação da horta é necessária para prover o solo de nutrientes indispensáveis para o bom desenvolvimento das plantas. É feita de acordo com a análise do solo, a qual determinará a quantidade de nutrientes necessários para o desenvolvimento da cultura.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao1' value='B' className='respostasInput' />
          <p>B) A adubação de plantio deve ser feita antes do plantio propriamente dito, quando se procura colocar à disposição das plantas os nutrientes essenciais exigidos.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao1' value='C' className='respostasInput' />
          <p>C) É indispensável à olericultura, a adubação de cobertura, também conhecida por adubação nitrogenada e contribui para aumentar a produtividade da maioria das culturas. É necessária, ainda, para melhorar a qualidade do produto obtido, especialmente, no caso de hortaliças herbáceas, como a alface.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao1' value='D' className='respostasInput' />
          <p>D) A adubação pode ser feita manualmente, quando se tratar de grandes áreas de plantio, ou mecanicamente, quando se tratar de áreas menores.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao1' value='E' className='respostasInput' />
          <p>E) Os adubos orgânicos servem, principalmente, para melhorar as condições físicas do solo, facilitando a aeração, a absorção de água e nutrientes e a conservação da umidade do solo. Quanto maior a quantidade de adubo orgânico aplicado no solo, e quanto melhor for misturado, melhores serão os resultados alcançados com relação à produtividade e à qualidade dos produtos.</p>
        </div>


        <h3>2- Qual destas plantas é conhecida por ser uma excelente opção para locais com pouca luz?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao2' value='A' className='respostasInput' />
          <p>A) Rosa do Deserto</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao2' value='B' className='respostasInput' />
          <p>B) Zamioculca</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao2' value='C' className='respostasInput' />
          <p>C) Cacto</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao2' value='D' className='respostasInput' />
          <p>D) Orquídea</p>
        </div>


        <h3>3- Qual destas ferramentas é mais apropriada para cavar buracos para o plantio de mudas?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao3' value='A' className='respostasInput' />
          <p>A) Ancinho</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao3' value='B' className='respostasInput' />
          <p>B) Enxada</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao3' value='C' className='respostasInput' />
          <p>C) Pá (Vanga)</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao3' value='D' className='respostasInput' />
          <p>D) Tesoura de poda</p>
        </div>

        <div className='questao4'>
          <h3>4- Identifique a planta na imagem abaixo.</h3>

          <div className='boxInput'>
            <input type='radio' name='questao4' value='A' className='respostasInput' />
            <p>A) Lírio</p>
          </div>

          <div className='boxInput'>
            <input type='radio' name='questao4' value='B' className='respostasInput' />
            <p>B) Violeta</p>
          </div>

          <div className='boxInput'>
            <input type='radio' name='questao4' value='C' className='respostasInput' />
            <p>C) Gerânio</p>
          </div>

          <div className='boxInput'>
            <input type='radio' name='questao4' value='D' className='respostasInput' />
            <p>D) Hortênsia</p>
          </div>


          <div className="img">
            <img src={geranio} />
          </div>


        </div>

        <h3>5- Qual é o método mais eficaz para controlar pragas em plantas sem o uso de produtos químicos?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao5' value='A' className='respostasInput' />
          <p>A) Rotação de culturas</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao5' value='B' className='respostasInput' />
          <p>B) Pulverização de pesticidas</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao5' value='C' className='respostasInput' />
          <p>C) Fertilização intensiva</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao5' value='D' className='respostasInput' />
          <p>D) Mantendo um microclima saudável entre plantas e solo</p>
        </div>


        <h3>6- Como você identificaria a presença de deficiência de micronutrientes em uma planta?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao6' value='A' className='respostasInput' />
          <p>A) Análise cor e textura</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao6' value='B' className='respostasInput' />
          <p>B) Medição da altura da planta</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao6' value='C' className='respostasInput' />
          <p>C) Observação das flores</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao6' value='D' className='respostasInput' />
          <p>D) Avaliação do sabor dos frutos</p>
        </div>


        <h3>7-  Qual é a melhor maneira de regar plantas em um jardim?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao7' value='A' className='respostasInput' />
          <p>A) Regar aleatoriamente.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao7' value='B' className='respostasInput' />
          <p>B) Regar no início da manhã ou no final da tarde.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao7' value='C' className='respostasInput' />
          <p>C) Regar apenas quando as plantas começarem a murchar.</p>
        </div>



        <h3>8- Como você deve lidar com ervas daninhas em um jardim?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao8' value='A' className='respostasInput' />
          <p>A) Deixá-las crescer, pois algumas são bonitas.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao8' value='B' className='respostasInput' />
          <p>B) Arrancar as ervas daninhas manualmente ou usar mulch para evitar seu crescimento.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao8' value='E' className='respostasInput' />
          <p>C) Usar produtos químicos fortes para garantir a erradicação completa.</p>
        </div>

        <h3>9- Qual é a importância da rotação de culturas em um jardim?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao9' value='A' className='respostasInput' />
          <p>A) Não é importante, as plantas sempre se adaptam.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao9' value='B' className='respostasInput' />
          <p>B) Usar produtos químicos fortes para garantir a erradicação completa.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao9' value='C' className='respostasInput' />
          <p>C) Ajuda a evitar a exaustão do solo e a prevenir o acúmulo de pragas específicas.</p>
        </div>



        <h3>10- Qual é a importância da rotação de culturas em um jardim?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao10' value='A' className='respostasInput' />
          <p>A) Apenas a estética, escolher as plantas mais bonitas.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao10' value='B' className='respostasInput' />
          <p>B) A preferência pessoal, independentemente das condições de crescimento.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao10' value='C' className='respostasInput' />
          <p>C) As condições climáticas e do solo para garantir que as plantas escolhidas prosperem.</p>
        </div>


        <h3>11- Como evitar o desperdício de água no jardim?</h3>

        <div className='boxInput'>
          <input type='radio' name='questao11' value='A' className='respostasInput' />
          <p>A) Utilizar sistemas de irrigação eficientes e coletar água da chuva.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao11' value='B' className='respostasInput' />
          <p>B) Regar o jardim todos os dias para garantir que as plantas recebam água suficiente.</p>
        </div>

        <div className='boxInput'>
          <input type='radio' name='questao11' value='C' className='respostasInput' />
          <p>C) Ignorar o uso consciente da água, já que é um recurso ilimitado.</p>
        </div>

        <div className='botaoEnviar'>
          <input type='submit' value='Finalizar' className='finalizarButton' />
        </div>
      </div>



    </div>

  )
}

export default Teste