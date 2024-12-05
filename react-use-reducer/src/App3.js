import logo from './logo.svg';
import './App.css';
import { useState , useReducer} from 'react';


function App () {

    const [number,setNumber] = useState(0);

    const countReducer = (oldCount,action)=>{
        switch(action.type){
            case 'PLUS' :
                return oldCount + Number(action.number);
            case 'MIN' :
                return oldCount - Number(action.number);
            case 'RESET' :
                return 0;
        }
    }

    const [count,countDispatch] = useReducer(countReducer,0);


    return(
        <div>
            <input type='text' onChange={(event) => {
                setNumber(event.target.value);
            }}></input>
            <button type='button' onClick={() => countDispatch({type:'PLUS' , number: number})}>+</button>
            <button type='button' onClick={() => countDispatch({type:'MIN' , number: number})}>-</button>
            <button type='button' onClick={() => countDispatch({type:'RESET' , number: number})}>0</button>
            <h1>{count}</h1>
        </div>
    )
}

export default App;