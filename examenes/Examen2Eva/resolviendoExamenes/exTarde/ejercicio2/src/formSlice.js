import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "",
  question: "",
  answers: [],
  questions:[],
  correct:0,
  datos:[],
  index:0
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setTitle:(state,action)=>{
            state.title = action.payload;
        },
        setQuestion:(state,action)=>{
            state.question = action.payload;
        },
        setDatos:(state)=>{
            const nuevaPregunta= {
                Title: state.title,
                Question: state.question,
                Answer1: state.answers[0],
                Answer2: state.answers[1],
                Answer3: state.answers[2],
                Answer4: state.answers[3],
                Correct: state.correct
            };
            state.questions.push(state.title);
           state.datos.push(nuevaPregunta);
           const respuestasGuardadas = 
           console.log("Todas las preguntas:", JSON.parse(JSON.stringify(state.datos)));
            // Restablecer los campos a sus valores iniciales
            state.title = "";
            state.question = "";
            state.answers = ["", "", "", ""]; // Restablecer las respuestas
            state.correct = null; // Restablecer la respuesta correcta
        },
        setAnswers:(state,action)=>{
            state.answers = action.payload;
        },
        setCorrect:(state,action)=>{
            state.correct = action.payload;
        }
    }    
})

export const {
    setTitle,
    setQuestion,
    setDatos, 
    setAnswers,
    setCorrect
} = formSlice.actions;

export const selectTitle = state => state.form.title
export const selectQuestion = state => state.form.question
export const selectAnswers = state => state.form.answers
export const selectQuestions = state => state.form.questions
export const selectDatos = state => state.form.datos
export const selectCorrect = state => state.form.correct



export default formSlice.reducer;
