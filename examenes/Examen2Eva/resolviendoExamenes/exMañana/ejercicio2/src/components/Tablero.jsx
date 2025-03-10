import { useState } from "react";
import Pregunta from "./Pregunta";
import Respuestas from "./Respuestas";
import Total from "./Total";
import quiz from "../../quiz";

function Tablero(){
    const [index, setIndex] = useState(0); 
    const [contadorCorrect,setContadorCorrect]= useState(0);
    const [contadorWrong,setContadorWrong]= useState(0)

    const correctIndex = quiz.questions[index].correct
    const correctAnswer = quiz.questions[index].answers[correctIndex]
    
    return<>
        <div className="quiz">
            <h1>El gran héroe americano</h1>
            <div>
            <div className="question-text"><Pregunta index = {index}/></div>
            <div className="answers">
                <Respuestas
                    index = {index}
                    setIndex = {setIndex} 
                    correctAnswer = {correctAnswer}
                    contadorCorrect={contadorCorrect} 
                    contadorWrong={contadorWrong} 
                    setContadorCorrect={setContadorCorrect} 
                    setContadorWrong={setContadorWrong} 
                    />
                
            </div>
            </div>
            <div className="total">
                <Total contadorCorrect = {contadorCorrect} contadorWrong={contadorWrong} setContadorCorrect = {setContadorCorrect} setContadorWrong={setContadorWrong}/>
            </div>
        </div>

    </>
}

export default Tablero;