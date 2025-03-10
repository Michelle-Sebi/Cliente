import quiz from "../../quiz";

function Respuestas(props){
    
    const {index,setIndex, correctAnswer, contadorCorrect, contadorWrong, setContadorCorrect, setContadorWrong} =props  
 
    function incrementarIndex(event){
        let newIndex = index + 1;
        let newContadorCorrect = contadorCorrect + 1;
        let newContadorWrong = contadorWrong + 1;
        
        if(newIndex>quiz.questions.length){
            newIndex = quiz.questions.length
        }
        setIndex(newIndex)
        
        if(event.target.textContent === correctAnswer){

            setContadorCorrect(newContadorCorrect)
        }else{
            setContadorWrong(newContadorWrong)
        }
    }

    return<>
        {quiz.questions[index].answers.map((answer, i)=>

            <button key={i} className="answer" onClick={incrementarIndex}>{answer}</button>
        )}



        {/* <button className="answer" onClick={incrementarIndex}>{quiz.questions[index].answers[0]}</button>

        <button className="answer" onClick={incrementarIndex}>{quiz.questions[index].answers[1]}</button>

        <button className="answer" onClick={incrementarIndex}>{quiz.questions[index].answers[2]}</button>

        <button className="answer" onClick={incrementarIndex}>{quiz.questions[index].answers[3]}</button> */}
        
    </>
}
                

export default Respuestas;