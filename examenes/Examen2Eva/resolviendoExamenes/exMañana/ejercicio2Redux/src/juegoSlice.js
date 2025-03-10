import { createSlice } from "@reduxjs/toolkit";
import quiz from "./quiz";

const initialState = {
    preguntas: quiz.questions,
    preguntaActual: 0,
    correctas: 0,
    incorrectas: 0
}


const juegoSlice = createSlice({
    name: 'juego',
    initialState,
    reducers:{
        responderPregunta:(state,action)=>{
            const {indexRespuesta} = action.payload;
            const pregunta = state.preguntas[state.preguntaActual]

            if(indexRespuesta === pregunta.correct){
                state.correctas += 1;
            }else{
                state.incorrectas += 1;
            }

            if(state.preguntaActual < state.preguntas.length - 1){
                state.preguntaActual += 1;
            }
        
        },
        
    }
})

export const {responderPregunta} = juegoSlice.actions;
export default juegoSlice.reducer;