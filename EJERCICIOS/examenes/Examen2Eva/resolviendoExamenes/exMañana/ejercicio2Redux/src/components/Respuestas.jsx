import { useSelector, useDispatch } from "react-redux"
import { responderPregunta } from "../juegoSlice"

export default function Respuestas() {
    const dispatch = useDispatch();
    const {preguntas, preguntaActual} = useSelector(state=>state.juego)


  return <>
        {preguntas[preguntaActual].answers.map((respuesta,index)=>
            <button 
                class="answer"
                key={index}
                onClick={()=>dispatch(responderPregunta({indexRespuesta: index}))}>
                    {respuesta}
                </button>
            
        )}
        
  </>
}
