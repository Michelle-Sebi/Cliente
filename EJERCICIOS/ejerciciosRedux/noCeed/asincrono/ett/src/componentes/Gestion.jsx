import React from 'react'
import { useSelector } from 'react-redux'
import Trabajador from './Trabajador'


export default function Gestion() {

    const listaTrabajadores = useSelector(state=> state.misTrabajadores.trabajadores)
  return (
    <>
        <h1>Trabajadores:</h1>
        <button>Candidatos</button>
        <div className='usuarios'>
            {listaTrabajadores.map((valor,index)=>
                <Trabajador valor={valor} index={index}/>
            )}
        </div>
    </>
  )
}
