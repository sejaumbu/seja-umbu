import { AiOutlineMore } from "react-icons/ai";
export default function Mensagens(){
    return(
        <div className="headerMensagens">
            <div className="infoContato">
                <img src='https://cdn-icons-png.flaticon.com/256/149/149071.png' className="fotoContato"/>
                <p>Gustavo de Melo Fernandes</p>
            </div>
            <i className="moreInfo"><AiOutlineMore/></i>
        </div>
    )
}