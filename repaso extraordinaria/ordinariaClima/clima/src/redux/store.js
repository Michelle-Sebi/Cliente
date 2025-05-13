import { configureStore } from '@reduxjs/toolkit';
import climaReducer from './climaSlice';

export const store = configureStore({
  reducer: {
    clima: climaReducer,
  },
});