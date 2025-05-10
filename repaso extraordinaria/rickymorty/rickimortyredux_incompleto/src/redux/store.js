import { configureStore } from '@reduxjs/toolkit';
import rickimortyReducer from './rickimortySlice';

export const store = configureStore({
  reducer: {
    rickimorty: rickimortyReducer,
  },
});