import React, { useReducer } from 'react';

import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'advance':
      return (state + 1) %4 ;
    case 'off':
      return 0;
    default:
      return state;

  }
}

function App() {
  const [lightLevel, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <h1>LIghts are:{describeLightLevel(lightLevel)}</h1>

      <button
        onClick={() => dispatch({ type: 'advance' })}
      >Change the level</button>
      <button
        onClick={() => dispatch({ type: 'off' })}
      >Off</button>

    </div>
  );
}

function describeLightLevel(level) {
  switch (level) {
    case 0:
      return 'off';
    case 1:
      return 'low';
    case 2:
      return 'medium';
    case 3:
      return 'high';
    default:
      return 'broken '

  }
}

export default App;
