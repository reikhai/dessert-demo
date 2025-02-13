import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';

// Define the type of the state managed by the store
export interface RootState {
  counter: {
    count: number;
  };
}

// Configure the store with the reducer and type it correctly
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the typed counterReducer
  },
});

// Type for the dispatch function (optional but useful)
export type AppDispatch = typeof store.dispatch;
