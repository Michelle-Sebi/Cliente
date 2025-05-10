
import './App.css'
import Buscador from './Buscador'
import FichaPersonaje from './FichaPersonaje'
import {useSelector } from 'react-redux';
import {  selectLoading } from './redux/rickimortySlice';

function App() {
  // const dispatch = useDispatch();
  // const personajes = useSelector(selectPersonajes)
  
  // const info = useSelector(selectInfo)
  const loading = useSelector(selectLoading)

 

  const pgSiguiente = ()=>{
    // const urlSiguiente = next
    // dispatch(setUrl(urlSiguiente))
  }

  const pgAnterior = ()=>{
    // const urlAnterior = prev
    // dispatch(setNext(urlAnterior))
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
