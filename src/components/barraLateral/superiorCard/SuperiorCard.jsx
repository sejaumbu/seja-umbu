import React from 'react'
import "../superiorCard/superiorCard.css"


function SuperiorCard({ fotoJar, nomeJar, cargo}) {
  return (
      <div className='cardJardineiro' >
        <img src={fotoJar} alt='Foto de perfil do jardineiro'/>
        <h4>{nomeJar}</h4>
        <h2>{cargo}</h2>
      </div>
  )
}

export default SuperiorCard;
