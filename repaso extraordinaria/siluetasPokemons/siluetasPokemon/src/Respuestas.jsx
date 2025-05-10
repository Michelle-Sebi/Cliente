import { useSelector, useDispatch } from 'react-redux'
import { selectInfoPokemons,setRespondido, setRespuestaSeleccionada, setPuntuacion,selectPuntuacion, selectRespuestaSeleccionada, selectRespuestaCorrecta, setCorrecto, selectRespondido } from './redux/siluetaSlice'

export default function Respuestas() {
  const dispatch = useDispatch();  
  const infoPokemons = useSelector(selectInfoPokemons)
  const respuestaSeleccionada = useSelector(selectRespuestaSeleccionada)
  const puntuacion = useSelector(selectPuntuacion)
  const respuestaCorrecta = useSelector(selectRespuestaCorrecta)
  const respondido = useSelector(selectRespondido)
  
  
  const clickarRespuesta = (e)=>{
    dispatch(setRespondido(true))
    dispatch(setRespuestaSeleccionada(e.target.value))
    if(e.target.value === respuestaCorrecta){
      dispatch(setCorrecto(true))
      dispatch(setPuntuacion(puntuacion + 1))
    }else{
      dispatch(setCorrecto(false))
    }
  }

  return (
    <div id="answers">
      {infoPokemons.map((pokemon, index)=>{
        let clase = 'answer'
        const esCorrecto = respuestaCorrecta === pokemon.nombre;
        const esSeleccionado = respuestaSeleccionada === pokemon.nombre;
        if(respondido && esSeleccionado){
          if(esCorrecto ){
            clase = 'correct'
          }else if(!esCorrecto){
            clase = 'wrong'
          }
        }
        return(
          <div className={clase} key={index}>
            <button
            value={pokemon.nombre}
            onClick={(e)=>clickarRespuesta(e)}>
              {pokemon.nombre}
            </button>
          </div>
        )
      })}
    </div>
  )
}
