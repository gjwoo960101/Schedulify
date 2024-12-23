import { configureStore} from '@reduxjs/toolkit';
import { dataSlice } from './slice/dataSlice.js';

 const store = configureStore({
    reducer: {
      dataSlice: dataSlice.reducer
    }
  });
  console.log("store : ",store)
  export default store;