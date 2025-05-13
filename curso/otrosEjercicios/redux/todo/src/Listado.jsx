import React from 'react'
import Tarea from './Tarea'
import { setListaTareas, setTarea } from './listaSlice'
import {useDispatch, useSelector} from 'react-redux'



export default function Listado() {
    const dispatch = useDispatch()
    const {listaTareas, tarea} = useSelector(state=>state.lista)

    const addTarea = ()=>{
        const newListaTareas= [...listaTareas, tarea]
        if(!tarea == ''){
        dispatch(setListaTareas(newListaTareas))
        dispatch(setTarea(''))
        }
    }


  return <>
    <h1>Lista de Tareas</h1>
    <input placeholder ='escribe la tarea' onChange={(e)=>dispatch(setTarea(e.target.value))}></input>
    <button onClick={addTarea}>Añadir</button>
    <div>
        <ul><Tarea/></ul>
    </div>
  </>
}
