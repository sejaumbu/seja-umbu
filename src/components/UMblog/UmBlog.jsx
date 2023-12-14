import './UmBlog.css';
import CardBlog from '../cardBlog/CardBlog';
import IdentidadeVisual from "../../assets/IdentidadeUMBU.svg"
import umbuPlanta from "../../assets/usadosEscalabilidade/umbuPlanta.png"
import { useNavigate } from 'react-router-dom';

function UmBlog(){
    const navigate = useNavigate();
    return(
        <div className='Umblog'>
            <div className='tittleUmblog'>
                <h1 className='umblogTittle'>UMBlog</h1>
                <h2 className='UmblogFrase'>O UMblog é o lugar onde expressamos a visão e valores da UMBU, oferecendo informações sobre a empresa, projetos, desafios e conquistas. Ele serve como uma maneira de nos aproximar de clientes, parceiros e colaboradores, demonstrando transparência e qualidade em nosso trabalho.</h2>
            </div>
            
            {/* <div className='containerValores'>
            <h2 className='Subtittles'>Missão, visão e valores</h2>
                <div className="valoresUmblog">
                    <div className="cardUmblog">
                    <img src='https://i.pinimg.com/736x/dc/06/46/dc0646a851861c53137151800da79bb8.jpg'/>
                        <span className='cardTittle-umblog'>Visão</span>
                        <span className='cardText-umblog'>Ser uma plataforma que inove o serviço de jardinagem</span>
                    </div>
                    <div className="cardUmblog-2">
                    <img src='https://i.pinimg.com/736x/dc/06/46/dc0646a851861c53137151800da79bb8.jpg'/>
                        <span className='cardTittle-umblog-2'>Missão</span>
                        <span className='cardText-umblog-2'>Proporcionar melhores condições de trabalho para o jardineiro e paisagistas, tornando o serviço acessivel e justo.</span>
                    </div>
                    <div className="cardUmblog">
                    <img src='https://i.pinimg.com/736x/dc/06/46/dc0646a851861c53137151800da79bb8.jpg'/>
                        <span className='cardTittle-umblog'>Valores</span>
                        <span className='cardText-umblog'>Profissionalismo, transparência, qualidade, inovação, inclusão social e desenvolvimento sustentável.</span>
                    </div>
                </div>
            </div> */}
            <div className="conceitosUmblog">
                <div className='conceitosUmblog-1'>
                    <h3>Conheça a UMBU</h3>
                    
                </div>
            </div>
            <div className="containerQuemSomos">
                <CardBlog
                image = "https://media.licdn.com/dms/image/D4D22AQGRa3vIoWxsjA/feedshare-shrink_1280/0/1693575187201?e=1704326400&v=beta&t=qnJ7rKJymWLskPaWQZYJN6j5UibP6YVogucEutKN4bE"
                tituloMateria = "Equipe UMBU" 
                dataPublicacao ="28 de setembro de 2023" 
                descricao = "Descubra a Equipe Apaixonada por Florescer Sonhos na UMBU" 
                materia = "/sobrenos"
                />
                <CardBlog
                // image = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                image = {IdentidadeVisual}
                tituloMateria = "Identidade Visual" 
                dataPublicacao ="15 de outubro de 2023" 
                descricao = "Florescendo uma Identidade Visual que Reflete Natureza, Confiança e Tranquilidade." 
                materia = "/identidade"
                />
                <CardBlog
                image = {umbuPlanta}
                tituloMateria = "Escalabilidade" 
                dataPublicacao ="30 de outubro de 2023" 
                descricao = "Expandindo Horizontes, Semeando Crescimento e Transformando a Jardinagem em uma Experiência Global." 
                materia = "/escalabilidade"
                />
                
            </div>
            <div className="containerQuemSomos">
                <CardBlog
                image = "https://img.freepik.com/fotos-premium/mulheres-jardineiras-felizes-em-luvas-e-tomates-cuidados-em-estufa-jardinagem-e-floricultura-cuidados-com-jardins_230311-46870.jpg"
                tituloMateria = "Elas Plantam" 
                dataPublicacao ="30 de outubro de 2023" 
                descricao = "Usamos a tecnologia para impulsionar mudanças positivas, ajudando jardineiras a alcançar seus objetivos." 
                materia = "/elasplantam"
                />
                <CardBlog
                // image = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                image = "https://www.guvenborca.com/wp-content/uploads/2018/11/15.-value_for_money.png"
                tituloMateria = "Planos" 
                dataPublicacao ="15 de outubro de 2023" 
                descricao = "Teste nossa plataforma por 2 meses gratuitos." 
                materia = "/planos"
                />
                <div className="cardCompleto">
                <div className="cardImagem">
                    <img src="https://classic.exame.com/wp-content/uploads/2020/12/PROA_Processo_Seletivo_GutoGarrote.jpg?quality=70&strip=info&w=1024" alt="" className="imagem" />
                </div>
                <div className="restanteCard">
                    <h2 className="tituloMateria" >PROA</h2>
                    <p className="dataPublicacao" >30 de outubro de 2023</p>
                    <p className="descricaoCard" >Conheça mais sobre o Instituto PROA</p>
                    <button className="botaoClica" onClick= "www.proa.org.br/proprofissao/">Saiba mais</button>
                </div>

            </div>
                
                
            </div>
        </div>  
    )
}

export default UmBlog