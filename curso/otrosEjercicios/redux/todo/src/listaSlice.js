import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tarea: '',
    listaTareas:[],
    completadas:[]
};

const listaSlice = createSlice({
    name: 'lista',
    initialState,
    reducers:{
        setTarea:(state,action)=>{
            state.tarea = action.payload
        },
        setListaTareas: (state,action)=>{
            state.listaTareas.push(action.payload)
        },
        setCompletada:(state,action)=>{
            
            const tareaIndex = action.payload;
            // Si la tarea está completada, la desmarcamos (la eliminamos de 'completadas')
            if (state.completadas.includes(tareaIndex)) {
                state.completadas = state.completadas.filter(index => index !== tareaIndex);
            } else {
                // Si no está completada, la marcamos como completada
                state.completadas.push(tareaIndex);
            }   
        }
    }
})

export const {setTarea, setListaTareas, setCompletada} = listaSlice.actions;
export default listaSlice.reducer;