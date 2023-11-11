import React from 'react'

function ItemBarra({iconUrl, nome}) {
  return (
    <div>
      <li className="container" >
        <span className="iconUrl">{iconUrl}</span>
        <span className="categories" >{nome}</span>
      </li>
    </div>
  )
}

export default ItemBarra;
