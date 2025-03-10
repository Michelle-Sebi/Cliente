import {useEffect} from 'react'
import Candidato from './Candidato'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCandidatos, fetchUnCandidato, agregarUnValor } from "../store/miSlice";

export default function Listado() {
    
    const dispatch = useDispatch()
    const { candidatos, trabajadores, status, error } = useSelector((state) => state.misTrabajadores);
    


    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchCandidatos())
        }
    }, [status,dispatch])

    const buscarUno = (indice) => {
        dispatch(fetchUnCandidato(indice));
      };  

    // useEffect(()=>{
    //     fetch('https://randomuser.me/api/?results=6')
    //     .then(response=>response.json())
    //     .then(datos=>setCandidatos(datos.results))
    //     .catch(error => console.error('Error al obtener candidatos:', error))
    // }, [])

    // const buscarUno=(indice)=>{
    //     fetch('https://randomuser.me/api/?results=1')
    //     .then(response=>response.json())
    //     .then(datos=>{
    //         const provisional=[...candidatos]
    //         provisional[indice]={...datos.results[0]}
    //         setCandidatos(provisional)
    //     })
    //     .catch(error => console.error('Error al buscar candidato:', error))
    // }

    const guardarUno= (valor)=>{
        console.log("Guardando en Redux:", valor)
        dispatch(agregarUnValor(valor))
    }

    return (
        <>
        <div className='presentacion'>
            {status === "loading" && <p>Cargando candidatos...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            {candidatos.map((valor,index)=>
            <Candidato 
            key={valor.login?.uuid || index}
            valor={valor} 
            index={index} 
            onBuscarUno={buscarUno} 
            onGuardarUno={guardarUno}/>
            )}
        </div>    
        <hr/>
        <div className='candidatos'>
            {trabajadores.map((valor, i) => (
            <button key={i}>{valor.name?.first || "Desconocido"}</button>
            ))}
        </div>
        </>
    )
}
