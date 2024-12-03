import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams , useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';

const firMenu = [
    {id : 1 , name: '메뉴' , url : '/'},
    {id : 2 , name: '읽기' , url : '/read'},
    {id : 3 , name: '작성' , url : '/write'},
    {id : 4 , name: '수정' , url : '/edit'}
]

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
    const navigate = useNavigate();
    const [data,setData] = useState([]);

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
        setData([...data,{id: selectIndex ,title : event.target.title.value , context : event.target.context.value}]);
        setSelectIndex(selectIndex+1);
        navigate('/read');
    }}>
        <p><input type='text' name='title' placeholder='제목을 작성해주세요'></input></p>
        <p><textarea name='context' placeholder='내용을 작성해주세요' className='common-textarea'></textarea></p>
        <button type='submit'>{buttonText}</button>
    </form>

    function EditComp(props){
        const [editTitle,setEditTitle] = useState(props.title);
        const [editContext,setEditContext] = useState(props.context);
        return(
            <form onSubmit={(event) => {
                event.preventDefault();
                let editData = [...data];
                for(let i=0; i < editData.length; i++){
                    if(props.id === editData[i].id){
                        editData[i] = {id : props.id, title : editTitle, context : editContext}
                    }
                }
                setData(editData);
                navigate('/read');
            }}>
                <p><input type='text' name='title' onChange={(e)=>{setEditTitle(e.target.value)}} value={editTitle}></input></p>
                <p><textarea name='context' placeholder='내용을 작성해주세요' className='common-textarea'onChange={(e)=>{setEditContext(e.target.value)}} value={editContext}></textarea></p>
                <button type='submit'>수정완료</button>
            </form>
        )
    }

    //읽기
    function ReadSub(){

        var params = useParams();
        const read_id = Number(params.read_id);
        const [isEditing,setIsEditing] = useState(false);


        var resultComp = 
        <div>
            <button type='button' onClick={(event)=>{
                event.preventDefault();
                navigate('/read');
                }} className='Button-size'>뒤로가기</button>
            <h2>상세정보가 없습니다.</h2>
        </div>;
        if(data.length > 0){
            {data.map((item) => {
                if(read_id === item.id){
                    // 수정모드 UI
                    if(!isEditing){
                        resultComp = 
                        <div style={{display:'flex',flexDirection:'column'}}>
    
                            <button type='button'onClick={(event)=>{
                            event.preventDefault();
                            navigate('/read');
                            }} className='Button-size'>뒤로가기</button>
    
                            <button type='button' onClick={(event)=>{
                                event.preventDefault();
                                setIsEditing(true);
                            }} className='Button-size mt-3'>수정시작</button>
                            <h2>{item.title}</h2>
                            <textarea value={item.context} className='common-textarea' readOnly={true}></textarea>
                        </div>  
                    }else{
                        resultComp = <EditComp id={item.id} title={item.title} context={item.context}></EditComp>
                        
                    }
                    
                }
                return resultComp;
            })}
        }
        return (
            resultComp
        )
    }
    
    function ReadComp(){
        let dataArry = [];
        if(path === '/read'){
            if(data.length > 0){
                for(let i = 0; i < data.length; i++){
                    dataArry.push(<li key={data[i].id}><NavLink to={'/read/'+data[i].id}>{data[i].title}</NavLink></li>);
                }
            }else{
                dataArry.push(<h2>작성된 글이 없습니다.</h2>);
            }
        }
        return (
            <>
                <ul>{dataArry}</ul>
                <Routes>
                    <Route path='/:read_id' element={<ReadSub></ReadSub>}></Route>
                </Routes>
            </>
            
        )
    }
    const subMenuComp = [
        {id : 1 , comp:<Route path='/' element={<h1>메뉴입니다.</h1>}></Route>},
        {id : 2 , comp:<Route path='/read/*' element={<ReadComp></ReadComp>}></Route>},
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
