import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'

function App() {
  const count = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        count: {count}
      </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      <h3>
        {isLogged ? 'logged in' : 'not logged in'}
      </h3>
    </div>
  );
}

export default App;
