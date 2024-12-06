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
    background-color: gainsboro;
`
const Header = styled.div`
    border-bottom : 1px solid gray;
    height : 15vh;
`
const Header_fir = styled.div`
    height : 10vh;
    background-color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
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
    background-color: #959595a8;
    font-size: 1.5rem;
    color: white;
    padding-left : 1rem;

    &::placeholder {
    color: white;
    }
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
    height : 50vh;
    border-bottom : 1px solid gray;
`

const ContentDiv = styled.div`
    width : 100%;
    height : 100%;
    overflow-y: scroll;
    
`
const ContentWrapperDiv = styled.div`
    height : 5vh;
    width : 100%;
    border-bottom : ${props => props.last ? 'none' : '1px solid gray'};
    display: flex;
`
const Content_fir_div = styled.div`
    width: 5%;
    height : 100%;
    border-right : 1px solid gray;
    display : flex;
    align-items: center;
    justify-content: center;
`
const Content_fir_checkbox = styled.input`
    width : 100%;
    height : 100%;
`

const Content_sec_div = styled.div`
    width : 80%;
    height : 100%;
    border-right : 1px solid gray;
    padding-left: 1rem;
`
const Content_sec_body = styled.div`
    height : 50%;
    width : 100%;
`
const Content_third_div = styled.div`
    width : 15%;
    height : 100%;
    display : flex;
    align-items: center;
    justify-content: space-evenly;
`
const Content_button = styled.button`
    border-radius : 1rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
    &:hover {
        box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* 마우스 호버 시 배경색 변경 */
    }
`


function App () {
    return (
        <Wrapper>
            <Body>
                <Header>
                    <Header_fir><h1>Todo List</h1></Header_fir>
                    <Header_sec>
                        <Header_sec_Wapper>
                            <HeaderInput type='text' name='content' placeholder='내용을 입력해주세요.'></HeaderInput>
                            <AddButton>+</AddButton>
                        </Header_sec_Wapper>
                    </Header_sec>
                </Header>
                <Content>
                    <ContentDiv>
                        <ContentWrapperDiv last={false}>
                            <Content_fir_div>
                                <Content_fir_checkbox type='checkbox'></Content_fir_checkbox>
                            </Content_fir_div>
                            <Content_sec_div>
                                <Content_sec_body>안녕하세요 텍스트 입니다</Content_sec_body>
                                <Content_sec_body>2024-12-06 12:39pm</Content_sec_body>
                            </Content_sec_div>
                            <Content_third_div>
                                <Content_button>Delete</Content_button>
                                <Content_button>Edit</Content_button>
                            </Content_third_div>
                        </ContentWrapperDiv>
                        
                    </ContentDiv>
                </Content>
            </Body>
        </Wrapper>
    )
}
export default App;