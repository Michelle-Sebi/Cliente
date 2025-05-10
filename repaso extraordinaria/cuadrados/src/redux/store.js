import { configureStore } from '@reduxjs/toolkit';
import cuadradosReducer from './cuadradosSlice';

export const store = configureStore({
  reducer: {
    cuadrados: cuadradosReducer,
  },
});