import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCompletada} from './listaSlice'


export default function Tarea() {
    const dispatch = useDispatch();
    const {listaTareas, completadas} = useSelector(state=>(state.lista))

  return <>
    {listaTareas.map((tarea,index)=>(
        <div key={index}>
        <li 
        
        style={{textDecoration: completadas.includes(index)?'line-through':'none'}}>
            {tarea}
        </li>
        {!completadas.includes(index) &&(
        <button onClick={()=>dispatch(setCompletada(index))}>
            Completada
        </button>
        )}
        </div>
    ))}
    
  </>
}
