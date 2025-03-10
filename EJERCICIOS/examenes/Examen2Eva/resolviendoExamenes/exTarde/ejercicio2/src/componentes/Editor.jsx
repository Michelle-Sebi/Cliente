import { useSelector, useDispatch } from 'react-redux'
import Respuestas from "./Respuestas"
import { 
    selectTitle,
    selectQuestion,
    selectAnswers,
    selectCorrect,
    setTitle,
    setQuestion,
    setDatos 
    
} from "../formSlice"

export default function Editor() {
    const dispatch = useDispatch()
    const title = useSelector(selectTitle) 
    const question = useSelector(selectQuestion)
    const answers = useSelector(selectAnswers);
    const correct = useSelector(selectCorrect);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (title.trim() === "" || question.trim() === "" || answers.some(answer => answer.trim() === "") || correct === null) {
            alert("Por favor, complete todos los campos y seleccione una respuesta correcta.");
            return;
        }
        dispatch(setDatos());
    };


    return <>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label>Title:</label>
                <input 
                type="text" 
                value={title}
                name="title"
                onChange={(event)=>dispatch(setTitle(event.target.value))}    
                />
            </div>

            <div className="row">
                <label>Question:</label>
                <input 
                type="text" 
                value={question} 
                name="question"
                onChange={(event)=>dispatch(setQuestion(event.target.value))}    
                />
            </div>

            <div className="answers"> <Respuestas/> </div>
            
            <button type="submit">Submit</button>
        </form>
    </>
}
