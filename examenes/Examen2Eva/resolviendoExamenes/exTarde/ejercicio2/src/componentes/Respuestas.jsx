import { useSelector, useDispatch } from "react-redux"
import { 
    selectAnswers,
    setAnswers,
    setCorrect
} from "../formSlice"

export default function Respuestas() {
    const dispatch = useDispatch()
    const answers = useSelector(selectAnswers)

    function añadirRespuesta(event,index){
        const newAnswers = [...answers]
        newAnswers[index] = event.target.value
        dispatch(setAnswers(newAnswers))
    }

    function respuestaCorrecta(event){
        const index = parseInt(event.target.dataset.index,10)
        dispatch(setCorrect(index +1))
    }

    return <>
        {[0,1,2,3].map((index)=>
            <div className="row" key={index}>
                <label>Answer {index + 1}:</label>
                <input 
                    type="text" 
                    value={answers[0]} 
                    data-index={index}
                    onChange={añadirRespuesta}/>
                <label>
                    <input 
                        type="radio"
                        name="correct"
                        data-index={index} 
                        onChange={respuestaCorrecta}
                    /> 
                    Correct
                </label>
            </div>
        )}
    </>
}
