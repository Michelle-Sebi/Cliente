import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPersonaje, setPersonaje} from './redux/rickimortySlice';

export default function Buscador() {
  const dispatch = useDispatch();
  const personaje = useSelector(selectPersonaje)
  const [personajeInput, setPersonajeInput] =useState(personaje)
  // const url = useSelector(selectUrl)

  const onBuscar = ()=>{
    dispatch(setPersonaje(personajeInput))
    // console.log('1', personaje)
    // if (personaje !== ''){
    //   const urlPersonaje = `https://rickandmortyapi.com/api/character/?name=${personajeInput}`;
    //   dispatch(obtenerDatos(urlPersonaje))
    //   console.log('Buscando personaje:', personajeInput);
    // }
  }

  return (
    <div>
      <label name="personaje">Personaje: </label>
      <input
      type='text'
      onChange={(e)=>setPersonajeInput(e.target.value)}
      value={personajeInput}
      style={{marginRight: '2%'}}
      />
      <button onClick={onBuscar}>Buscar</button>
    </div>
  )
}
