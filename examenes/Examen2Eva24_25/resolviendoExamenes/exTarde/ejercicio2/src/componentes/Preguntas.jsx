import { selectQuestions } from "../formSlice"
import { useSelector } from "react-redux"


export default function Preguntas() {
    
    const questions = useSelector(selectQuestions)
  return <>
        <div>
            
            <h2>Questions:</h2>
            <ul>
                {questions.map((question, index) =>(
                    <li key={index}>
                        {question}  
                    </li>))}
            </ul>
            
        </div>
        
  </>
}