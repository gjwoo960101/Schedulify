import '../App.css';
import {BrowserRouter, Routes, Route, NavLink , useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { dataSlice_actions } from '../store/slice/dataSlice';
import { useState} from 'react';


export const Header = () =>{
  return (
    <header className='main-header'>
        <h1>게시판</h1>
    </header>
  )
}

const LeftContainer = () =>{
  
  const navigate = useNavigate();
  const data = useSelector((state) => state.dataSlice.content);
  const dispatch = useDispatch();
  return (
    <div className='half-container-left'>
          <div className='full-width'>

            <div className='full-width margin-bottom'>
              <div className='search full-width'>
                <form className='search-form'>
                  <input type='text' placeholder='Search...' className='search-input'/>
                  <button className='search-button'>Search</button>
                </form>
              </div>
            </div>

            <div className='new-post-area'>
              <button className='button' onClick={(e)=>{
                e.preventDefault();
                navigate('/write');
              }}>게시글 작성</button>
            </div>

            <div className='post-list'>
              <div className='post-header'>
                <span className='post-cell'>번호</span>
                <span className='post-cell'>제목</span>
                <span className='post-cell'>작성자</span>
                <span className='post-cell'>작성일</span>
                <span className='post-cell'>조회수</span>
              </div>
              {data.map((item, index) => (
                <NavLink className='post-row' to={`/read`} key={index} onClick={
                  (e) => {
                    return dispatch(dataSlice_actions.read({num:item.num}));
                    }
                  }>
                  <span className='post-cell'>{item.num}</span>
                  <span className='post-cell post-title'>{item.title}</span>
                  <span className='post-cell'>{item.author}</span>
                  <span className='post-cell'>{item.createDate}</span>
                  <span className='post-cell'>{item.count}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
  )
}



const PostContent = () =>{

  const data = useSelector((state) => state.dataSlice.readData);
  const navigate = useNavigate();
  return (
    <div className='post-content'>
          <h2>{data.title}</h2>
          <p>작성자: <span>{data.author}</span></p>
          <p>작성일: <span>{data.createDate}</span></p>
          <p>조회수: <span>{data.count}</span></p>
          <div className='post-body'>
            <pre>{data.content}</pre>
          </div>
          <div className='edit-div'>
            <button className='button del-button' onClick={(e)=>{
                navigate('/delete');
            }}>삭제</button>
            <button className='button' onClick={(e)=>{
                navigate('/edit');
            }}>수정</button>
            
          </div>
      </div>
  )
}

const PostForm = () =>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className='post-form'>
      <h2>게시글 작성</h2>
      <form onSubmit={(e)=>{
            e.preventDefault();

            const formData = new FormData(e.target);
            const formValues = {};
            formData.forEach((value, key) => {
              formValues[key] = value;
            });
            dispatch(dataSlice_actions.write(formValues));
            navigate('/main');
          }}>
        <div className='form-group'>
          <label htmlFor='title'>제목</label>
          <input type='text' id='title' name='title' className='form-control'/>
        </div>
        <div className='form-group'>
          <label htmlFor='author'>작성자</label>
          <input type='text' id='author' name='author' className='form-control'/>
        </div>
        <div className='form-group'>
          <label htmlFor='content'>내용</label>
          <textarea id='content' name='content' className='form-control'></textarea>
        </div>
        <div className='new-post-area'>
          <button type='submit' className='button'>작성하기</button>
        </div>
      </form>
    </div>
  )
}



const EditForm = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editData = useSelector((state) => state.dataSlice.content.find(item => item.num === state.dataSlice.readData.num));
  const [data, setData] = useState({
    title: editData.title || '',
    author: editData.author || '',
    content: editData.content || ''
  });
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData((prevData) => (
    {
      ...prevData,
      [name]: value
    }));
  }
  return (
    <div className='post-form'>
      <h2>게시글 수정</h2>
      <form onSubmit={(e)=>{
            e.preventDefault();

            const formData = new FormData(e.target);
            const formValues = {};
            formData.forEach((value, key) => {
              if(key === 'num'){
                formValues[key] = Number(value);
              }else{
                formValues[key] = value;
              }
              
            });
            dispatch(dataSlice_actions.edit(formValues));
            navigate('/main');
          }}>
        <div className='form-group'>
          <input type='hidden' id='num' name='num' value={editData.num}/>
          <label htmlFor='title'>제목</label>
          <input type='text' id='title' name='title' className='form-control' value={data.title} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='author'>작성자</label>
          <input type='text' id='author' name='author' className='form-control' value={data.author} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='content'>내용</label>
          <textarea id='content' name='content' className='form-control' value={data.content} onChange={handleChange}></textarea>
        </div>
        <div className='new-post-area'>
          <button type='submit' className='button'>수정하기</button>
        </div>
      </form>
    </div>
  )
}

const Main = () =>{
  return (
    <div>
      <h1>Main</h1>
    </div>
  )
}

const RightContainer = () =>{

  return(
    <div className='half-container-right'>
      <Routes>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/read' element={<PostContent/>}></Route>
        <Route path='/write' element={<PostForm/>}></Route>
        <Route path='/edit' element={<EditForm/>}></Route>
      </Routes>
    </div>
  )
}

export const Body = () =>{
  return (
    <BrowserRouter>
      <div className='body'>
        <LeftContainer></LeftContainer>
        <RightContainer></RightContainer>
      </div>
    </BrowserRouter>
  )
}