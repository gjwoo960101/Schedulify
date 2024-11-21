import './App.css';
import {useState} from 'react';


function Header(props){
    return (
        <header>
            {props.title}
        </header>
    );
}

function Body(props){
    const data = props.li_Body;
    return (
        <div>
            <ol>
               {data.map(item =>(
                <li key={item.id}><a href={'/'+item.id} id={item.id} onClick={event=>{
                    event.preventDefault();
                    props.onChangEle(event.target.id);
                }}>{item.body}</a></li>
               ))} 
            </ol>
        </div>
    );
}


function App(){

    const [id,setId] = useState(null);

    let lis = [
        {id : 1 , body : 'li-fir-ele'},
        {id : 2 , body : 'li-sec-ele'},
        {id : 3 , body : 'li-thir-ele'}
    ]

    let selectText = '';

    lis.forEach(item=>{
        if(item.id === Number(id)){
            selectText = item.body;
        }
        }
    );

    return (
        <>
        <Header title="헤더입니다."></Header>
        <Body li_Body={lis} onChangEle={(_id)=>{
            setId(_id);
        }}></Body>

        {selectText}
        </>
    );
}

export default App;