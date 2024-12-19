import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink , useNavigate} from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import { createSlice} from '@reduxjs/toolkit';

const readSlice = createSlice({
  name: 'readSlice',
  initialState: {
    maxNum:0,
    content:[]
   
  },
  reducers: {
    write : (state,action) =>{
      const newData = {
        ...action.payload
        , num: state.maxNum+1
        , createDate: getCurrentDateTime()
        , count: 0
      };
      const newState = [...state.content,newData];
      state.content = newState;
      return state;
    }
  }
});

const store = configureStore({
  reducer: {
    readSlice: readSlice.reducer
  }
});

const Header = () =>{
  return (
    <header className='main-header'>
        <h1>게시판</h1>
    </header>
  )
}

const LeftContainer = () =>{

  const navigate = useNavigate();
  const data = useSelector((state) => state.readSlice.content);
  console.log("data: ",data)
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
                <div className='post-row' key={index}>
                  <span className='post-cell'>{item.num}</span>
                  <NavLink className='post-cell post-title' to={`/read`} onClick={
                    () => console.log({index})
                    }>
                    {item.title}
                  </NavLink>
                  <span className='post-cell'>{item.author}</span>
                  <span className='post-cell'>{item.createDate}</span>
                  <span className='post-cell'>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

const PostContent = () =>{
  return (
    <div className='post-content'>
          <h2>게시물 제목</h2>
          <p>작성자: <span>작성자 이름</span></p>
          <p>작성일: <span>작성일</span></p>
          <p>조회수: <span>조회수</span></p>
          <div className='post-body'>
            <p>게시물 내용이 여기에 표시됩니다.</p>
          </div>
        </div>
  )
}

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const PostForm = () =>{

  const dispatch = useDispatch();
  

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
            dispatch(readSlice.actions.write(formValues));
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

const RightContainer = () =>{
  return(
    <div className='half-container-right'>
      <Routes>
        <Route path='/read' element={<PostContent/>}></Route>
        <Route path='/write' element={<PostForm/>}></Route>
      </Routes>
    </div>
  )
}

const Body = () =>{
  return (
    <BrowserRouter>
      <div className='body'>
        <LeftContainer></LeftContainer>
        <RightContainer></RightContainer>
      </div>
    </BrowserRouter>
  )
}


function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Header></Header>
        <Body></Body>
      </div>
    </Provider>
    
  );
}

export default App;
