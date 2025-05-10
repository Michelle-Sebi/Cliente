import { configureStore } from '@reduxjs/toolkit';
import banderasReducer from './banderasSlice';

export const store = configureStore({
  reducer: {
    banderas: banderasReducer,
  },
});
