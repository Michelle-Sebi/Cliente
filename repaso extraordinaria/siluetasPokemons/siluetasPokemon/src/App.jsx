
import { useDispatch } from 'react-redux';
import { useEffect } from "react"
import './App.css'
import Imagen from './Imagen'
import Puntuacion from './Puntuacion'
import Respuestas from './Respuestas'
import { peticionInfoPokemon, setRespondido } from './redux/siluetaSlice';


function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(peticionInfoPokemon())
  }, [dispatch])

  function siguientePregunta(){
    dispatch(peticionInfoPokemon())
    dispatch(setRespondido(false))
  }

  return (
    <>
      <Puntuacion/>
      <Imagen/>
      <Respuestas/>

      <div className="next-container">
        <button className="next" onClick={()=>{siguientePregunta()}}>Next question</button>
      </div>
    </>
  )
}

export default App
