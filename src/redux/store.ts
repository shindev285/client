import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    
    //Reducer này sẽ xử lý và cập nhật trạng thái của phần auth trong store.
    authReducer,
  },
});

export default store;