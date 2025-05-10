import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tema: 'claro',
  nombre: '',
  drinks:[]
};

const coctelSlice = createSlice({
  name: 'coctel',
  initialState,
  reducers: {
    setTema:(state,action)=>{
        state.tema = action.payload;
    },
    setNombre:(state,action)=>{
        state.nombre = action.payload;
    },
    setDrinks:(state,action)=>{
        state.drinks = action.payload;
    }
  }
})

export const {setTema, setNombre, setDrinks} = coctelSlice.actions;
export const selectTema = state => state.coctel.tema
export const selectNombre = state => state.coctel.nombre
export const selectDrinks = state => state.coctel.drinks
export default coctelSlice.reducer;