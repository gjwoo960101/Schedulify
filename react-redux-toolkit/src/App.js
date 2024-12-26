import React from 'react';
import {createStore} from 'redux';
import { Provider,useSelector,useDispatch } from 'react-redux';
import store from './store';
import {up} from './slice';

const Counter = () =>{
  const dispatch = useDispatch();
  const count = useSelector(state => {
    return state.counter.value
  });
  return (
    <div>
      <button onClick={() => {
        dispatch(up(2))
      }}>+</button> {count}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div >
        <Counter></Counter>
    </div>
    </Provider>
    

  );
}

export default App;
