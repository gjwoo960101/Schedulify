import logo from './logo.svg';
import './App.css';
import { useState , useReducer} from 'react';
import {BrowserRouter, Routes, Route,useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 뷰포트 전체 높이 */
  width: 100vw; /* 뷰포트 전체 너비 */
`;

const Body  = styled.div`
    width : 50vw;
    height : 70vh;
    border : 1px solid gray;
    border-radius : 1rem;
    overflow: hidden;
`
const Header = styled.div`
    border-bottom : 1px solid gray;
    height : 15vh;
`
const Header_fir = styled.div`
    height : 10vh;
    background-color: #976cffad;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
const Header_sec = styled.div`
    height : 5vh;
    overflow: hidden;
`
const Header_sec_Wapper = styled.div`
    width:100%;
    display:flex;
    height: 100%;
`

const HeaderInput = styled.input`
    height:100%;
    width:90%;
    outline: none;
    border: none;
    background-color: #000000d9;
    font-size: 1.5rem;
    color: white
    padding-left : 1rem;
`
const AddButton = styled.button`
    height:100%;
    width:10%;
    border: none;
    background-color: #a9a9a9d1;
    color: white;
    font-size: 2rem;
`
const Content = styled.div`
    height : 55vh;
`


function App () {
    return (
        <Wrapper>
            <Body>
                <Header>
                    <Header_fir><h1>Todo List</h1></Header_fir>
                    <Header_sec>
                        <Header_sec_Wapper>
                            <HeaderInput type='text' name='content'></HeaderInput>
                            <AddButton>+</AddButton>
                        </Header_sec_Wapper>
                    </Header_sec>
                </Header>
                <Content>
                    <div>
                        <div style={{height:'5vh',width:'5%'}}><input type='checkbox' style={{height:'85%',width:'100%'}}></input></div>
                    </div>
                </Content>
            </Body>
        </Wrapper>
    )
}
export default App;