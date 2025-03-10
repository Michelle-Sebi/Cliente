import Editor from "./Editor"
import Preguntas from "./Preguntas"

export default function  Formulario() {

    return<>
        <div id="quiz-editor">
            <h1>Quiz editor</h1>

            <div className="editor">
                <Editor/>
            </div>
                

            <div className="questions">
                 <Preguntas/>   
            </div>

        </div>
    </>                                                                                            
}
