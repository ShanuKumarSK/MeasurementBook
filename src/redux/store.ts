import { configureStore } from '@reduxjs/toolkit';
import measurementBookReducer from './slices/measurementBookSlice';
import locationReducer from './slices/locationSlice';


export const store = configureStore({
  reducer: {
     measurementBook:measurementBookReducer,
     location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;