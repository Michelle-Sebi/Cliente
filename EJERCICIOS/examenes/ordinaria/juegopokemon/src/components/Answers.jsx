import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAnswers, selectCorrect, setScore, selectScore, setClickado, selectClickado } from '../pokemonSlice'

export default function Answers() {
    const dispatch = useDispatch();
    const answers = useSelector(selectAnswers) 
    const correct = useSelector(selectCorrect)
    const score = useSelector(selectScore)
    const clickado= useSelector(selectClickado)

    function eleccionRespuesta(i) {
        if (!clickado) { // Solo permite un clic si no se ha hecho clic antes
            if (i === correct) {
                dispatch(setScore(score + 1)); 
            }
            dispatch(setClickado(true));
        }
    }
    
    return<>
        {answers.map((answer, i)=>{
            
            const buttonStyle = clickado
            ? i === correct
                        ? { border: "5px solid green", filter: "drop-shadow(2px 4px 6px black)" }
                        : { border: "5px solid red", backgroundColor: "red" }
                    : {}; 
            return (
                <div className='answer' key={i}>
                    <button 
                    onClick={()=>eleccionRespuesta(i)}
                    style= {buttonStyle}
                    disabled={clickado} >
                        {answer}
                    </button>
                </div>
            )
        })}
    </>
}
                    
    
    
