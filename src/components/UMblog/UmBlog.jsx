import './UmBlog.css';
import Bamboo from '../../assets/Umblog/Bamboo.png'
import Indoor from '../../assets/Umblog/Indoor.png'
import Plant from '../../assets/Umblog/Plant.png' 


export default function UmBlog(){
    return(
        <main className='Umblog'>
            <div className='tittleUmblog'>
                <h1 className='umblogTittle'>UMBlog</h1>
                <h2 className='UmblogFrase'>Acreditamos que, assim como a natureza, o conhecimento também tem muitas camadas a serem exploradas.</h2>
            </div>
            <h2 className='Subtittles'>Missão, visão e valores</h2>
            <div className='containerValores'>
                <div className="valoresUmblog">
                    <div className="cardUmblog">
                        <img src={Bamboo}/>
                        <span className='cardTittle-umblog'>Visão</span>
                        <span className='cardText-umblog'>Ser uma plataforma que inove o serviço de jardinagem</span>
                    </div>
                    <div className="cardUmblog-2">
                        <img src={Indoor}/>
                        <span className='cardTittle-umblog-2'>Missão</span>
                        <span className='cardText-umblog-2'>Proporcionar melhores condições de trabalho para o jardineiro e paisagistas, tornando o serviço acessivel e justo.</span>
                    </div>
                    <div className="cardUmblog">
                        <img src={Plant}/>
                        <span className='cardTittle-umblog'>Valores</span>
                        <span className='cardText-umblog'>Profissionalismo, transparência, qualidade, inovação, inclusão social e desenvolvimento sustentável.</span>
                    </div>
                </div>
            </div>
            <div className="conceitosUmblog">
                <div className='conceitosUmblog-1'>
                    <h3>Sustentabilidade</h3>
                    <h3>UMBU</h3>
                    <h3>Conheça</h3>
                </div>
            </div>
            <div className="containerQuemSomos">
                <div className="quemSomos">
                    <article>
                        <img src='https://s3-alpha-sig.figma.com/img/ac20/dfce/f8afb31957ea017284ae1169908a9225?Expires=1701043200&Signature=Frw0MaLENNiIfqUBXYGmTtkZXjI51ur30qK79R2q2PHi2Nz6wqcUZkiCel9RA5ltAhvSc60FISZLaea-nAZ60TYtsRoyVH4NSUQQYbg3cV15tokZQa7gemDDjLqz4cRkoZ-Fwoj5T9ggAqNNEFUvjX8oalE3AY4T1pbW6gF~rL44Hb4-deuev1mR-zdeqtVhTPxywkjrNEcWYPDp4aN2pAl-zcGZB0oQPk438iPQIAHwfAqtKtkjq7RK5fZ6bFcCh-fbY41hYnqhcKfBu-S-Ivmo980YqSoXxTZyVRVkBoovy0DDP-hfk5zQGdbWx370xxaSNQRezhxM1LJJRSYIEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <div className='conteudoConceitosFlex'>
                            <div className="conteudoConceitos">
                                <h3>Quem somos?</h3>
                                <p>A equipe da Umbu é composta por profissionais apaixonados e qualificados em tecnologia, design e gestão, unidos por uma visão compartilhada. Especializados em diversas áreas, trabalham colaborativamente para inovar e impulsionar o crescimento da Umbu, transformando desafios em oportunidades.</p>
                            </div>
                            <div className='conteudoConceitosB'>
                                <button>Conheça mais</button>
                            </div> 
                        </div>
                    </article>

                    <article>
                        <img src='https://s3-alpha-sig.figma.com/img/fd85/bdf3/0ea38ac19342d52117eefcd61fa4d86d?Expires=1701043200&Signature=nN4qjV80Wq2QFLgBhSAW2WVQsPP0qddGBhq4HTniKZMHl8at-b4JP6rZcGfEkVywQE9J43vC7lNa0q7CSay95u6BtnaLcAPp9PXvN1Y5urPaO3N4uasPOGg2gXmBTzGACSYAA4Qgw~ER2XEzO39dYVEc98aDzG6JrtoRPOiLtfjUjGLfPsCpW6GnH5SNtaUzkFi6pIJw~0CeHpBvH64k9f6akK2CPRLZnToCKEdrTpvBCe54EkrJ5-qWk7vM5-x-PphITAyuAla72wh2WYMwbP5E62wVbF6lAOzMzLQrghKuM6MScBabKK0pIZ2zMVkdU2n6x4ii235G7nQ2OsfPyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <div className='conteudoConceitosFlex'>
                            <div className="conteudoConceitos">
                                <h3>Identidade visual da UMBU</h3>
                                <p>A equipe da Umbu é composta por profissionais apaixonados e qualificados em tecnologia, design e gestão, unidos por uma visão compartilhada. Especializados em diversas áreas, trabalham colaborativamente para inovar e impulsionar o crescimento da Umbu, transformando desafios em oportunidades.</p>
                            </div>
                            <div className='conteudoConceitosB'>
                                <button>Conheça mais</button>
                            </div> 
                        </div>
                    </article>

                    <article>
                        <img src='https://s3-alpha-sig.figma.com/img/44c1/6224/57bf803754766b00e49ae977bb9aa712?Expires=1701043200&Signature=Rs1~ZiJx0uDn9hXZEnkMZsvhGVv1rr8JuPCauPvp9oLETMfZT006T6tfeNQJgXfSppf2yX3chm~XUSm7ah5RocWsU98fvXhP2hgUECYqAnOA8pxpET7CzFPiMHVe8fA6QngvgGSuW4NkChQwzOk0GlAdWRorVJudV6EfbuOaqYinCyvohWJfookC-KcUgm9HPktiD9AfXm1CnrQWsApcvt~ch4esxCpwZ3IlTLKRP2-OeuJlwfLqbOYdpSzwhPUuYyoIk~nByOM865TsTMwstHz32yCk2AN6WcwunYnemjYmHS5wzJ07XYuM7FXz1aRVSO9bxJjVc8imcZfEx1c5PA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <div className='conteudoConceitosFlex'>
                            <div className="conteudoConceitos">
                                <h3>Escalabilidade</h3>
                                <p>Na Umbu, nossa ênfase na escalabilidade permeia todos os aspectos, desde a infraestrutura até o design de produtos. Comprometidos com o crescimento sustentável, buscamos soluções que atendam às demandas atuais e proporcionem uma base sólida para a expansão contínua, permitindo que nossos clientes evoluam com confiança ao lado da Umbu.</p>
                            </div>
                            <div className='conteudoConceitosB'>
                                <button>Conheça mais</button>
                            </div> 
                        </div>
                    </article>
                </div>
            </div>
        </main>  
    )
}