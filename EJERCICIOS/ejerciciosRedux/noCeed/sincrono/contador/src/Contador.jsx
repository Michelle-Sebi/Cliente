import React from 'react'
import { setContador } from './contadorSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Contador() {
  const dispatch = useDispatch();
  const contador = useSelector(state=>state.contador.contador)

  return <>
    <h2>Contador:</h2>
    <p>{contador}</p>
    <button onClick={()=>dispatch(setContador(contador +1))}>Aumentar</button>
    <button onClick={()=>dispatch(setContador(contador-1))}>Disminuir</button>

  </>
  
}
