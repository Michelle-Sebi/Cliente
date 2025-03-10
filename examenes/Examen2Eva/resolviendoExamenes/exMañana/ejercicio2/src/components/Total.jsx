

function Total(props){
    const{contadorCorrect, contadorWrong}= props
    return <>
        <div className="total">
                Correct: <span className="correct">{contadorCorrect}</span>&nbsp;&nbsp;Wrong: <span className="wrong">{contadorWrong}</span>
            </div>
    </>
}

export default Total;