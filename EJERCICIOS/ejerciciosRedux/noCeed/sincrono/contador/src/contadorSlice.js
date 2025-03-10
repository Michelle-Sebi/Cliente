import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contador: 0
};

const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers:{
        setContador: (state,action)=>{
            state.contador = action.payload
        }
    }
})
export const {setContador} = contadorSlice.actions;
export default contadorSlice.reducer;