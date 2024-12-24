import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink , useNavigate} from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import { createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name : 'dataSlice',
    initialState : {
        num : 0
    },
    reducers : {
        up : (state,action) => {
            state.num = state.num + 1;
        },
        down : (state, action) =>{
            state.num = state.num - 1;
        }
    }
});

const store = configureStore({
    reducer : {
        dataSlice : dataSlice.reducer
    }
});

const Body = () =>{
    const num = useSelector((state) => state.dataSlice.num);
    const dispatch = useDispatch();
    return (
    <div>
        <h1>{num}</h1>
        <button onClick={() => {dispatch(dataSlice.actions.up())}}>+</button>
        <button onClick={() => {dispatch(dataSlice.actions.down())}}>-</button>
    </div>
    )
    
}


const App = () =>{

    
    return (
        <Provider store={store}>
            <Body></Body>
        </Provider>
    )
}

export default App;