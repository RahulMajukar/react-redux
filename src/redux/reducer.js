// reducer.js
// Reducer function for managing counter state
const counterReducer = (state = 0, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for INCREMENT action type
    case 'INCREMENT':
      return state + 1; // Increment state by 1
    // Case for DECREMENT action type
    case 'DECREMENT':
      return state - 1; // Decrement state by 1
    // Default case for unknown action types
    default:
      return state; // Return current state unchanged
  }
};

// Export the counterReducer function as the default export of this module
export default counterReducer;
