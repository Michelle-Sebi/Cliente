
import quiz from "../../quiz";

function Pregunta(props){
    const {index} = props
   
   
    return<>
        <div className="question-text">{quiz.questions[index].text}</div>
    </>
}

export default Pregunta;