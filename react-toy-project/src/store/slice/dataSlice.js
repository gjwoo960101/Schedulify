import { createSlice} from '@reduxjs/toolkit';
import { getCurrentDateTime } from '../../utils/utils';

export const dataSlice = createSlice({
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
      }
  
    }
  });
  export const dataSlice_actions = dataSlice.actions;