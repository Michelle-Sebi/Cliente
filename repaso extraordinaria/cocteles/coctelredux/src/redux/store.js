import { configureStore } from '@reduxjs/toolkit';
import coctelReducer from './coctelSlice';

export const store = configureStore({
  reducer: {
    coctel: coctelReducer,
  },
});
