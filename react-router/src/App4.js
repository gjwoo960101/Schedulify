import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams , useLocation} from 'react-router-dom';
import {useState} from 'react';

const firMenu = [
    {id : 1 , name: '메뉴' , url : '/'},
    {id : 2 , name: '읽기' , url : '/read'},
    {id : 3 , name: '작성' , url : '/write'},
    {id : 4 , name: '수정' , url : '/edit'}
]
const data = [];


function Menu (){
    let result = [];
    for(let i = 0; i < firMenu.length; i++){
        result.push(<li key={firMenu[i].id}><NavLink to={firMenu[i].url}>{firMenu[i].name}</NavLink></li>)
    }
    return(
        <ul>
            {result}
        </ul>
    )
}

function SubMenu(){
    const [selectIndex,setSelectIndex] = useState(0);

    const location = useLocation();
    const path = location.pathname;

    let buttonText = '';
    if(path === '/write'){
        buttonText = '작성';
    }else{
        buttonText = '수정'
    }
    const commonComp = 
    <form onSubmit={(event) => {
        event.preventDefault();
        data.push({id: selectIndex ,title : event.target.title , context : event.target.context});
    }}>
        <p><input type='text' name='title' placeholder='제목을 작성해주세요'></input></p>
        <p><textarea name='context' placeholder='내용을 작성해주세요'></textarea></p>
        <button type='submit'>{buttonText}</button>
    </form>

    //읽기
    
    let readComp = null;

    

    function ReadComp(){
        let dataArry = [];
        if(path === '/read'){
            if(data.length > 0){
                for(let i = 0; i < data.length; i++){
                    dataArry.push(<li key={data[i].id}><NavLink to={'/read'+data[i].id}>{data[i].title}</NavLink></li>);
                    //readComp = <ul>{dataArry}</ul>;
                }
            }else{
                dataArry.push(<h2>작성된 글이 없습니다.</h2>);
            }
        }
        return (
            <ul>{dataArry}</ul>
        )
    }
    console.log("compCheck:",<ReadComp></ReadComp>)
    
    const subMenuComp = [
        {id : 1 , comp:<Route path='/' element={<h1>메뉴입니다.</h1>}></Route>},
        {id : 2 , comp:<Route path='/read/*' element={<h1>읽기(미구현)</h1>}></Route>},
        {id : 3 , comp:<Route path='/write' element={commonComp}></Route>},
        {id : 4 , comp:<Route path='/edit' element={<h1>수정(미구현)</h1>}></Route>},
    ]

    const resultCompArry = [];
    for(let i = 0; i < subMenuComp.length; i++){
        resultCompArry.push(subMenuComp[i].comp)
    }
    return(
        <Routes>
            {resultCompArry}
        </Routes>
    )

}



function App (){

    return(
        <BrowserRouter>
            <Menu></Menu>
            <SubMenu></SubMenu>
        </BrowserRouter>
    )
}

export default App;
