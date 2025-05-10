
import { useDispatch } from 'react-redux';
import './App.css'
import Imagen from './Imagen'
import Puntuacion from './Puntuacion'
import { peticionInfoBanderas, setRespondido } from './redux/banderasSlice'
import Respuestas from './Respuestas'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(peticionInfoBanderas())
  })
  function siguientePregunta(){
    dispatch(peticionInfoBanderas())
    dispatch(setRespondido(false))
  
  }


  return (
    <>
      <h1>¿De que país se trata?</h1>
      <Puntuacion/>
      <Imagen/>
      <Respuestas/>
      <div className="next-container">
        <button className="next" onClick={()=>siguientePregunta()}>Siguiente pregunta</button>
      </div>
    </>
  )
}

export default App
