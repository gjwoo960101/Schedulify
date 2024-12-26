import { createSlice} from '@reduxjs/toolkit';
import { getCurrentDateTime } from '../../utils/utils';

export const dataSlice = createSlice(
  {
    name: 'dataSlice',
    initialState: {
      maxNum:0,
      readNum:0,
      editNum:0,
      content:[],
      readData: {}
    },
    reducers: {
      write : (state,action) =>{
        state.maxNum = state.maxNum+1;
        const newData = {
          ...action.payload
          , num: state.maxNum
          , createDate: getCurrentDateTime()
          , count: 0
        };
        const newState = [...state.content,newData];
        state.content = newState;
        return state;
      },
      read : (state,action) =>{
        //초기화
        const selectReadData = state.content.find(item => item.num === action.payload.num);
        selectReadData.count = selectReadData.count + 1;
        state.readData = selectReadData;
        return state;
      },
      edit : (state,action) =>{
        const editContent = state.content.map((item)=>{
          if(item.num === action.payload.num){
            return {
              ...item,
              ...action.payload,
            }
          }else{
            return item;
          }
        })
        state.content = editContent;
        return state;
      },
      delete : (state,action) =>{
        const deleteContent = state.content.filter((item) => item.num !== action.payload.num);
        state.content = deleteContent;
        return state;
      }
    }
  }
);
  export const dataSlice_actions = dataSlice.actions;