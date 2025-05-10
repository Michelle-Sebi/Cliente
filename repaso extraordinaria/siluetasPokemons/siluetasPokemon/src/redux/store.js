import { configureStore } from '@reduxjs/toolkit';
import siluetaReducer from './siluetaSlice';

export const store = configureStore({
  reducer: {
    silueta: siluetaReducer,
  },
});
