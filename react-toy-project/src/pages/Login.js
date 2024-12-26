import '../App.css';
import {BrowserRouter, Routes, Route, NavLink , useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { dataSlice_actions } from '../store/slice/dataSlice';
import { useState} from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 추가
    console.log(formData);
    navigate('/main');
  };

  return (
    <div className='login-container'>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>아이디</label>
          <input
            type='text'
            id='username'
            name='username'
            className='form-control'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>비밀번호</label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-control'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='button'>
          로그인
        </button>
      </form>
    </div>
  );
};