import { useState } from 'react'

export default function Buscador(props) {

  const {personaje, setPersonaje}=props  
  const [personajeInput, setPersonajeInput] =useState(personaje)
  
  return (
    <div>
      <label name="personaje">Personaje: </label>
      <input 
      type='text' 
      onChange={(e)=>setPersonajeInput(e.target.value)} 
      value={personajeInput}
      style={{marginRight: '2%'}}
      />
      <button onClick={()=>setPersonaje(personajeInput)}>Buscar</button>
    </div>
  )
}
