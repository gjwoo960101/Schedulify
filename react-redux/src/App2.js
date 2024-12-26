import './App.css';
import React,{useState} from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect} from 'react-redux';


const initState = {number_1 : 0,number_3 : 0};

const reducer = (state = initState,action) =>{
    var newState = {...state};
    if(action.type === 'plus_1'){
        newState.number_1++;
    }else if (action.type === 'plus_3'){
        newState.number_3++;
    }
    return newState;
}

const store = createStore(reducer);

const Div1 = () =>{
    const number_1 = useSelector((state) => state.number_1);
    return (
        <div>
            <h1>div1: {number_1}</h1>
            <Div2></Div2>
        </div>
    )
}

const Div2 = () =>{
    return (
        <div>
            <h1>div2: </h1>
            <Div3></Div3>
        </div>
    )
}

const Div3 = () =>{

    const number = useSelector((state) => state.number_3);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>div3: {number}</h1>
            <button onClick={() =>{dispatch({type:'plus_1'})}}>1번 플러스</button>
            <button onClick={() =>{dispatch({type:'plus_3'})}}>3번 플러스</button>
        </div>
    )
}

const App = () => {
    return (
        <div id='container'>
            <h1>Root: </h1>
            <div id='grid'>
            <Provider store={store}>
                <Div1></Div1>
            </Provider>
            </div>
        </div>
    )
}

export default App;