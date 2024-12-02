import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  {id : 1, title : 'HTML', description:'HTML is ...'},
  {id : 2, title : 'JS', description:'JS is ...'},
  {id : 3, title : 'React', description:'React is ...'}
]

function Topic(){

  var params = useParams();
  var topic_id = params.topic_id;

  // null을 해도 되나 기본값을 넣어둠 
  var selected_topic = {
    title : 'Sorry',
    description : 'Not Found'
  };
  for (var i=0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }

  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics(){
  var lis = [];
  for (var i = 0; i < contents.length; i++){
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path='/:topic_id' element={<Topic></Topic>}></Route>
      </Routes>
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function Notfound(){
  return(
    <div>
      <h2>Not Found</h2>
      Not Found...
    </div>
  )
}

function App(){
  return(
    <BrowserRouter>
      <div>
        <h1>React Router DOM example</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
          <Routes>
            <Route path='/'  element={<Home/>} ></Route>
            <Route path='/topics/*'  element={<Topics/>} ></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
