import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';

const answer = [
    {id : 1 , text : '맞아 어렵지..'},
    {id : 2 , text : '쉽게 생각하면 쉬울꺼야'},
    {id : 3 , text : '너도?? 나도 몰라'}
]

function One(){
    var params = useParams();
    const index = Number(params.index);
    let resultComp = '';

    for(let i = 0; i < answer.length; i++){
       if(index === answer[i].id){
        console.log(answer[i].text);
        resultComp = <div>{answer[i].text}</div>
       }
    }
    return(
        <>
            {resultComp}
        </>
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
