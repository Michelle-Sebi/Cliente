import { useState, useEffect } from 'react'
import './App.css'
import Buscador from './Buscador'
import FichaPersonaje from './FichaPersonaje'

function App() {
  
  const [personaje, setPersonaje] = useState('')
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?name=')
  const [info, setInfo]=useState([]) 
  const [results, setResults]=useState([])
  
  const obtenerDatos = async (url)=>{
    const respuesta = await fetch(url)
    if(!respuesta.ok){
        throw new Error (`HTTP error! estatus : ${respuesta.status}`)
    }
    const datos = await respuesta.json()
    const resultado = datos.results
    const tresResultados = resultado.slice(0,3)
    const info = datos.info
    setResults(tresResultados)
    setInfo(info)
  }

  useEffect(()=>{
    if (personaje !== ''){
    const urlPersonaje = url + personaje
    obtenerDatos(urlPersonaje)
    }
  },[personaje])

  useEffect(()=>{
    if (personaje !== ''){
    obtenerDatos(url)
    }
  },[url])

  const pgSiguiente = ()=>{
    const urlSiguiente = info.next
    setUrl(urlSiguiente)
  }

  const pgAnterior = ()=>{
    const urlAnterior = info.prev
    setUrl(urlAnterior)
  }

  return (
    <>
      <h1>Rick & Morty Personajes</h1>
      <Buscador personaje={personaje} setPersonaje={setPersonaje}/>
      <br></br>
      <button style={{marginRight: '60%'}} onClick={pgAnterior}>Anterior</button>
      <button onClick={pgSiguiente}>Siguiente</button>
      <FichaPersonaje personaje={personaje} results={results}/>
      
    </>
  )
}

export default App
