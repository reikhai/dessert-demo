// store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer'; // Import the cartReducer

// Configure the Redux store
export const store = configureStore({
  reducer: {
    items: cartReducer, // Add the cartReducer to the store
  },
});

// Export the store's dispatch function for easy usage
export type AppDispatch = typeof store.dispatch;
