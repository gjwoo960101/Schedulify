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
                    props.onChangEle(Number(event.target.id));
                }}>{item.body}</a></li>
               ))} 
            </ol>
        </div>
    );
}

function Create(props){
    return(
        <form onSubmit={event => {
            event.preventDefault();
            props.onChangeSave(event.target.body.value);
        }}>
            <p><textarea name='body' placeholder='body'></textarea></p>
            <p><input type='submit' value='li추가'></input></p>
        </form>
    )
}

function Update(props){

    const [body,setBody] = useState(props.body);

    return(
        <form onSubmit={event => {
            event.preventDefault();
            props.onUpdate(event.target.body.value);
        }}>
            <p><textarea name='body' placeholder='body' value={body} onChange={event => {
                setBody(event.target.value);
            }}></textarea></p>
            <p><input type='submit' value='li수정'></input></p>
        </form>
    );
}


function App(){
    const [mode,setMode] = useState('READ');
    const [id,setId] = useState(null);
    const [newId,setNewId] = useState(4);

    const [lis,setLis]  = useState([
        {id : 1 , body : 'li-fir-ele'},
        {id : 2 , body : 'li-sec-ele'},
        {id : 3 , body : 'li-thir-ele'}
    ]);

    let selectText = '';
    let updateComp = '';
    let createComp = '';
    if(mode === 'READ'){
        lis.forEach(item=>{
                if(item.id === id){
                    selectText = item.body;
                }
            }
        );
        updateComp = <button onClick={()=>{
            setMode('UPDATE')
            }} type='button'>수정</button>;
        
        createComp = <button onClick={()=>{
            setMode('CREATE')
            }} type='button' style={{marginRight: '10px'}}>추가</button>;

    }else if(mode === 'CREATE'){
        selectText = <Create onChangeSave={(_body) => {
            const addLis = {id : newId, body: _body}
            const newLis = [...lis];
            newLis.push(addLis);
            setLis(newLis);
            setMode('READ');
            setId(newId);
            setNewId(newId+1);
        }}></Create>
    }else if (mode === 'UPDATE'){
        let body = null;
        lis.forEach(item=>{
            if(item.id === Number(id)){
                body = item.body;
            }
        }
    );

        selectText = <Update onUpdate={(_body) => {
            const newLis = [...lis];
            const updatebody = {id : id, body : _body};
            for(let i = 0; i < newLis.length; i ++){

                console.log("id check : ",typeof id)
                console.log("id22 check : ",typeof newLis[i].id)

                if(newLis[i].id === id){
                    newLis[i] = updatebody;
                    break;
                }
            }
            setLis(newLis);
            setMode('READ');
        }} body={body}></Update>
    }
    

    return (
        <div>
            <Header title="헤더입니다."></Header>
            <Body li_Body={lis} onChangEle={(_id)=>{
                setId(_id);
                setMode('READ')
            }}></Body>
            
            <p>
                {createComp}
                {updateComp}
            </p>
            <p>{selectText}</p>
        </div>
    );
}

export default App;