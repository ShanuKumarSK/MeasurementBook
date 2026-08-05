import { configureStore } from '@reduxjs/toolkit';
import measurementBookReducer
from './slices/measurementBookSlice';


export const store = configureStore({
  reducer: {
     measurementBook:measurementBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;