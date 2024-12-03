import logo from './logo.svg';
import './index.css';
import React, {createContext, useContext} from 'react';


//react context api 데이터를 전역적으로 관리 및 공유 테스트

const commonData = [
    {id: 1 , name : 'test1'},
    {id: 2 , name : 'test2'},
    {id: 3 , name : 'test3'}
]
const commonContext = createContext(commonData);

const App = () => {

    const extendContext = useContext(commonContext);
    console.log("extendContext:",extendContext)

    return (
        <commonContext.Provider value={[...commonData,{id:4,name:'test4'}]}>
            <div>
                <Sub1></Sub1>
            </div>
        </commonContext.Provider>
        
    )
}

const Sub1 = () => {
    const extendContext = useContext(commonContext);
    console.log("Sub1 in extendContext : ",extendContext)
    return (
        <h1></h1>
    )
} 

export default App;