import React from 'react';
import { connect } from 'react-redux';
// Importing action creators from actions.js
import { increment, decrement } from './redux/actions'; 

// Define the App component
function App({ count, increment, decrement }) {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Define mapStateToProps function to map state to props
const mapStateToProps = (state) => ({
  count: state.counter, // Access the counter slice of the state
});

// Define mapDispatchToProps object to map action creators to props
const mapDispatchToProps = {
  increment, // Map the increment action creator
  decrement, // Map the decrement action creator
};

// Connect the App component to Redux store using connect function
export default connect(mapStateToProps, mapDispatchToProps)(App);
