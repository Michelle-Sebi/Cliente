import { useSelector, useDispatch } from 'react-redux'
import { selectPuntuacion, selectRespuestaCorrecta, selectRespuestas, selectRespuestaSeleccionada,setRespuestaSeleccionada, setPuntuacion, setRespondido, selectRespondido } from './redux/banderasSlice'
import Puntuacion from './Puntuacion';

export default function Respuestas() {
    const dispatch = useDispatch();
    const puntuacion = useSelector(selectPuntuacion)
    const respuestas = useSelector(selectRespuestas)
    const respuestaCorrecta = useSelector(selectRespuestaCorrecta)
    const respuestaSeleccionada = useSelector(selectRespuestaSeleccionada)
    const respondido = useSelector(selectRespondido)

    function respondiendo(e){
        dispatch(setRespondido(true))
        dispatch(setRespuestaSeleccionada(e.target.value))
        if(e.target.value === respuestaCorrecta){
            dispatch(setPuntuacion(puntuacion + 1))
        }
    }
    
    return (
        
        <div id="answers">
            {respuestas.map((respuesta, index)=>{
                const esCorrecto = respuestaCorrecta === respuesta
                let clase = 'answer'
                if(respondido && esCorrecto){
                    clase ='correct'
                }else if(respondido && !esCorrecto){
                    clase = 'wrong'
                }
                return(
                <div className="answer" key={index}>
                    <button 
                    className={clase}
                    id="answer-1"
                    value={respuesta}
                    onClick={(e)=>respondiendo(e)}>
                        {respuesta}
                    </button>
                </div>
                )
            })}
        </div>
    )
}

      