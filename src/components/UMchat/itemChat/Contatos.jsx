export default function Contatos(props){
    return(
        <div className="contatos">
            <img src={props.iconesContatos}></img>
            <div className="nome-dataContatos">
                <p className="nomeContato">{props.nomeContato}</p>
                <p className="dataMensagem">{props.dataMensagem}</p>
            </div>  
        </div>
    )
}   