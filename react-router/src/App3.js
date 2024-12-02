import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';

function One(){
    var params = useParams();
    console.log("params check : ",params)
    return(
        <div>나는 전부 모르겠어.</div>
    )
}

function Sub(){
    return (
        <div>
            <ul>
                <li><NavLink to='/b/1'>영어는 어렵지?</NavLink></li>
                <li><NavLink to='/b/2'>영어는 쉽나?</NavLink></li>
                <li><NavLink to='/b/3'>모르겠다</NavLink></li>
            </ul>
            <Routes>
                <Route path='/:index' element={<One></One>}></Route>
            </Routes>
        </div>
    )
}

function App (){
    return(
        <BrowserRouter>
            <ul>
                <li><NavLink to='/a'>안녕?</NavLink></li>
                <li><NavLink to='/b'>Hi?</NavLink></li>
                <li><NavLink to='/c'>こんにちは?</NavLink></li>
            </ul>
            <Routes>
                <Route path='/a' element={<h1>그래 안녕!</h1>}></Route>
                <Route path='/b/*' element={<Sub></Sub>}></Route>
                <Route path='/c' element={<h1>こんにちは!!</h1>}></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;
