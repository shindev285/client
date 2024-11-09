
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token: string; 
  _id: string;   
  name: string;  
  rule: number;  
}

// Khởi tạo giá trị ban đầu của AuthState 
const initialState: AuthState = {
  token: "",
  _id: "",
  name: "",
  rule: 0,
};

// Tạo một slice tên là "auth" để quản lý trạng thái xác thực của người dùng
const authSlice = createSlice({
  name: "auth", 
  
  // Đặt trạng thái ban đầu cho slice 
  initialState: {
    data: initialState,
  },

  // Định nghĩa các reducers cho slice để thay đổi trạng thái dựa trên các hành động (actions)
  reducers: {
    // Tạo reducer addAuth để cập nhật dữ liệu xác thực
    addAuth: (state, action) => {
      // Cập nhật toàn bộ state.data bằng giá trị payload từ action
      state.data = action.payload;
    },
  },
});


export const authReducer = authSlice.reducer;

// Xuất hành động (action) addAuth để các component khác có thể dispatch hành động này
export const { addAuth } = authSlice.actions;

// Selector này nhận state của toàn bộ store và truy cập state.authReducer.data
export const authSelector = (state: any) => state.authReducer.data;
