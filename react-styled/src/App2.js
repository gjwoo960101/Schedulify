import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const CommonButtton = styled.button`
    width : 200px;
    color : white;
    background-color : gray;
    display : flex;
    align-items : center;
    justify-content: center;
`
const CustomCommonButton = styled(CommonButtton)`
    background-color : black;
`
const CustomCommonButtomParam = styled(CustomCommonButton)`
    background-color : ${props => props.primary ? 'red' : 'blue'}
`
const ReactButton = props => {
    return <button className={props.className} style={{width:'200px'}}>{props.children}</button>
}
const ReactCustomButton = styled(ReactButton)`
    width : 200px;
    display : flex;
    align-items : center;
    justify-content: center;
    color : tomato;
`
const ParentDiv = styled.div`
    display : flex;
    flex-direction: column;
`

const App = ()=>{
    return (
        <ParentDiv>
            <CommonButtton>CommonButtton</CommonButtton>
            <CustomCommonButton>CustomCommonButton</CustomCommonButton>
            <CustomCommonButtomParam primary>CustomCommonButtomParam</CustomCommonButtomParam>
            <CustomCommonButtomParam>CustomCommonButtomParam</CustomCommonButtomParam>
            <ReactButton>React</ReactButton>
            <ReactCustomButton>CustomReact</ReactCustomButton>
        </ParentDiv>
    )
}

export default App;
