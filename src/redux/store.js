// store.js
// Import configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the counterReducer from reducer.js
import counterReducer from './reducer';

// Configure Redux store
const store = configureStore({
  reducer: {
// Combine reducers, where 'counter' slice of state is managed by counterReducer
    counter: counterReducer,
  },
});

// Export the configured Redux store
export default store;
