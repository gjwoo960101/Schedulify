import { configureStore} from '@reduxjs/toolkit';
import { dataSlice } from './slice/dataSlice';

 const store = configureStore({
    reducer: {
      dataSlice: dataSlice.reducer
    }
  });
  export default store;