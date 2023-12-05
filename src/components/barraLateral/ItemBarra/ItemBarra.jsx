import React from 'react'
import "../barraLateral.css"


function ItemBarra({ iconUrl, nome, rota }) {
  return (
    <div>
      <li className="container" >
        <a href={rota}><span className="iconUrl">{iconUrl}</span>
          <span className="categories" >{nome}</span>
        </a>
      </li>
    </div>
  )
}

export default ItemBarra;
