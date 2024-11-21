import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Header(props){
  return(
    <header>
        <h1><a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
      </header>
  )
}

function Nav(props){

  const lis = []
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>);
  }

  return(
    <nav>
        <ol>
          {lis}
        </ol>
      </nav>
  )
}

function Article(props){
  return(
    <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}


function App(){

  const [mode , setMode] = useState('WELCOME');

  const [id, setId] = useState(null);

  const topics = [
    {id: 1, title: 'html', body : 'html is ...'},
    {id: 2, title: 'css', body : 'css is ...'},
    {id: 3, title: 'js', body : 'js is ...'},
  ]

  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return(
    <div>
      <Header title="REACT" onChangeMode={()=>{
        setMode('WELCOME');
        }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
      {content}
    </div>
  )
}

export default App;
