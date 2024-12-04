import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'; 



function App() {
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.log(counter,"counter ")
  },[counter]);
  return (
     <div>
      <h2>{counter}</h2>
      <button type='button' onClick={(e)=>{
        setCounter((state)=> state+1);
      }}>버튼</button>
     </div>
  );
}

export default App;
