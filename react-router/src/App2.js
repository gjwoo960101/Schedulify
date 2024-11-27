import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';

const menus = [
    {id : 1 , name : 'Home', url: '/'},
    {id : 2 , name : 'React', url: '/react'},
    {id : 3 , name : 'Js', url: '/js'},
    {id : 4 , name : 'CSS', url: '/css'}
]
const subMenus = [
    {id : 1 , name : 'React 1' , url: '/1'},
    {id : 2 , name : 'React 2' , url: '/2'},
    {id : 3 , name : 'React 3' , url: '/3'}
]
const subMenuH2 = [
    {id : 1, name : 'React 1 ...' , url: '/react/1'},
    {id : 2, name : 'React 2 ...' , url: '/react/2'},
    {id : 3, name : 'React 3 ...' , url: '/react/3'}
]

function Home(){
    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}

function ReactOne(){
    var params = useParams();
    var h2Arry = [];

    console.log("params: ",params)
    for(let i = 0; i < subMenuH2.length; i++){
        if(subMenuH2[i].id === Number(params.react_id)){
            h2Arry.push(<h2>{subMenuH2[i].name}</h2>);
        }
    }
    return (
        <>
         {h2Arry}
        </>
    );
}
function React(){
    var subMenu = [];
    for(let i = 0; i < subMenus.length; i++){
        subMenu.push(<li key={subMenus[i].id}><NavLink to={'/react'+subMenus[i].url}>{subMenus[i].name}</NavLink></li>);
    }
    return(
        <div>
            <h2>React</h2>
            <ul>
                {subMenu}
            </ul>
            <Routes>
                <Route path='/:react_id' element={<ReactOne></ReactOne>}></Route>
            </Routes>
        </div>
    )
}
function Js(){
    return(
        <div>
            <h2>Js</h2>
        </div>
    )
}
function Css(){
    return (
        <div>
            <h2>CSS</h2>
        </div>
    )
}


function Menu(){
    var menuComp = [];
    for(let i = 0; i < menus.length; i++){
        menuComp.push(<li key={menus[i].id}><NavLink to={menus[i].url}>{menus[i].name}</NavLink></li>)
    }
    return(
        <ul>
            {menuComp}
        </ul>
    )
}
function SubMenu(){
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/react/*' element={<React></React>}></Route>
            <Route path='/js' element={<Js></Js>}></Route>
            <Route path='/css' element={<Css></Css>}></Route>
        </Routes>
    );
}


function App() {
  return (
    <BrowserRouter>
        <div>
            <h2>React Router DOM Study</h2>
            <Menu></Menu>
            <SubMenu></SubMenu>
        </div>
    </BrowserRouter>
  );
}

export default App;
