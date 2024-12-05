import logo from './logo.svg';
import './index.css';
import React, {createContext, useContext} from 'react';

const commonTheme = {border: '10px solid gray'}
const commonContext = createContext(commonTheme);

const App = () => {

    const theme = useContext(commonContext);

    return (
        <commonContext.Provider value={{border: '10px solid blue'}}>
         <div className='root' style={theme}>
            <h1>Parent</h1>
            <Sub1></Sub1>
        </div>   
        </commonContext.Provider>
        
    )
}

const Sub1 = () =>{
    const theme = useContext(commonContext);
    return (
        <commonContext.Provider value={{border: '10px solid red'}}>
            <div style={theme}>
                <h1>Sub1</h1>
                <Sub2></Sub2>
            </div>
        </commonContext.Provider>
    )
}
const Sub2 = () =>{
    const theme = useContext(commonContext);
    return (
        <div style={theme}>
            <h1>Sub1</h1>
            <Sub3></Sub3>
        </div>
    )
}
const Sub3 = () =>{
    const theme = useContext(commonContext);
    return (
        <div style={theme}>
            <h1>Sub1</h1>
        </div>
    )
}

export default App;