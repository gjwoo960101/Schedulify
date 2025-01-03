import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect} from 'react-redux';

const reducer = (currentState, action) =>{
  if(currentState === undefined){
    return {
      number : 1
    }
  }
  const newState = {...currentState};

  if(action.type === 'plus'){
    newState.number++;
  }

  return newState;
}

const store = createStore(reducer);

function Left1(props){
  return (
    <div>
      <h1>Left1:</h1>
      <Left2></Left2>
    </div>
  )
}
function Left2(props){
  return(
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  )
}

function Left3(props){

  const number = useSelector((state) => state.number);

  return(
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  )
}

function Right1(props){
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={()=>{}}></Right2>
    </div>
  )
}
function Right2(props){
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={()=>{}}></Right3>
    </div>
  )
}
function Right3(props){

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input type='button' value="+" onClick={()=>{
        dispatch({type : 'plus'})
      }}></input>
    </div>
  )
}


function App() {
  return (
   <div id='container'>
    <h1>Root: </h1>
    <div id='grid'>
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
      
    </div>
    
   </div>
  );
}

export default App;
