import { configureStore } from "@reduxjs/toolkit";
import juegoReducer from './juegoSlice';

export const store = configureStore({
    reducer:{
        juego: juegoReducer,
    }
});