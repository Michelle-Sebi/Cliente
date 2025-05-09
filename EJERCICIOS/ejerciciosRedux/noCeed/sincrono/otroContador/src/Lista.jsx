import React from 'react'

export default function Lista(props) {
    const{listado, setListado, num} = props

    const agregarNumero=()=>{
    
        const newListado = [...listado, num]
        setListado(newListado)
    
    }

  return <>
    <button onClick={agregarNumero}>Agregar</button>
      <ul>
        {listado.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  </>
   
}
