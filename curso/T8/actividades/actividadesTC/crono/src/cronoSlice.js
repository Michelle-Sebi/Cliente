import { createSlice } from "@reduxjs/toolkit";


function substractMs(date, milliseconds){
    return new Date(date.getTime()- milliseconds);
}

function createTime(hh, mm, ss, ms){
    let date = new Date();
    date.setHours(hh,mm,ss,ms);
    return date;
}     

export const cronoSlice = createSlice({
    name: 'crono',
    initialState:{
        contador: createTime(0,0,10,0)

    },
    reducers:{
        decrementar(state,action){
            state.contador = substractMs(state.contador, 10);
        }

    }
})

export const selectContador = state => state.crono.contador;
export const {decrementar} = cronoSlice.actions;
export default cronoSlice.reducer;