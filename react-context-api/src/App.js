import logo from './logo.svg';
import './index.css';
import React, {createContext, useContext} from 'react';

const themeDefualt = {border:'10px solid green'};
const themeContext = createContext(themeDefualt);

export default function App() {

  const theme = useContext(themeContext);
  return (
    <div className='root' style={theme}>
        <h1>Hello World</h1>
        <Sub1 />
    </div>
  )
}

const Sub1 = () =>{

  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{border: '10px solid black'}}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
    </div>
    </themeContext.Provider> 
    
  )
}

const Sub2 = ()=>{

  const theme = useContext(themeContext);
  return(
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  )
}

const Sub3 = ()=>{

  const theme = useContext(themeContext);
  return(
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  )
}