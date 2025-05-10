import { useEffect } from 'react'
import './App.css'
import Buscador from './Buscador'
import FichaPersonaje from './FichaPersonaje'
import { useDispatch, useSelector } from 'react-redux';
import { selectPersonaje, selectUrl, setUrl, selectInfo, obtenerDatos, selectLoadingPersonajes } from './redux/rickimortySlice';

function App() {
  const dispatch = useDispatch();
  const personaje = useSelector(selectPersonaje)
  const url = useSelector(selectUrl)
  const info = useSelector(selectInfo)
  const loading = useSelector(selectLoadingPersonajes)
 
  // useEffect(()=>{
  //   if (personaje !== ''){
  //   const urlPersonaje = url + personaje
  //   dispatch(obtenerDatos(urlPersonaje)) 
  //   }
  // },[personaje])

  useEffect(()=>{
    if (personaje !== ''){
    dispatch(obtenerDatos(url)) 
    }
  },[url])

  const pgSiguiente = ()=>{
    const urlSiguiente = info.next
    dispatch(setUrl(urlSiguiente)) 
  }

  const pgAnterior = ()=>{
    const urlAnterior = info.prev
    dispatch(setUrl(urlAnterior))
  }

  return (
    <>
      <h1>Rick & Morty Personajes</h1>
      <Buscador />
      <br></br>
      <button style={{marginRight: '60%'}} onClick={pgAnterior}>Anterior</button>
      <button onClick={pgSiguiente}>Siguiente</button>
      
      {loading
        ?<p>Cargando...</p>
        : <FichaPersonaje />
      }
    </>
  )
}

export default App
