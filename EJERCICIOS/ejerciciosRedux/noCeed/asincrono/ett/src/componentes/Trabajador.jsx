import React from 'react'

export default function Trabajador({valor, index}) {
  return (
    <>
        <div className='columna'>
            <div className='fotoUsuario'>
                <img src={valor.picture.large}></img>
            </div>
            <div className='nombreUsuario'>
                <strong>
                    {valor.name.last}, {valor.name.first}
                </strong>
            </div>
            <div>{valor.location.city}</div>
            <div>({valor.location.country})</div>

        </div>
        

    </>
  )
}
