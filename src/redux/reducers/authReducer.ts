// import { createSlice } from "@reduxjs/toolkit";
// import { localDataNames } from "../../constants/appInfor";

// export interface AuthState {
//   token: string;
//   _id: string;
//   name: string;
//   rule: number;
// }

// const initialState: AuthState = {
//   token: "",
//   _id: "",
//   name: "",
//   rule: 0,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     data: initialState,
//   },

//   reducers: {
//     addAuth: (state, action) => {
//       state.data = action.payload;
//       syncLocal(action.payload);
//     },
//     removeAuth: (state, _action) => {
//       state.data = initialState; // Đưa về trạng thái ban đầu
//       clearLocal(); // Xóa dữ liệu trong localStorage
//     },
//   },
// });

// export const authReducer = authSlice.reducer;
// export const { addAuth, removeAuth } = authSlice.actions;
// export const authSelector = (state: any) => state.authReducer.data;

// // Hàm đồng bộ dữ liệu vào localStorage
// const syncLocal = (data: any) => {
//   localStorage.setItem(
//     localDataNames.authData, // Thay bằng tên hợp lệ của khóa
//     JSON.stringify(data)
//   );
// };

// // Hàm xóa dữ liệu trong localStorage khi logout
// const clearLocal = () => {
//   localStorage.removeItem(localDataNames.authData);
// };

/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { localDataNames } from '../../constants/appInfor';

export interface AuthState {
	token: string;
	_id: string;
	name: string;
	rule: number;
}

const initialState = {
	token: '',
	_id: '',
	name: '',
	rule: 0,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: initialState,
	},
	reducers: {
		addAuth: (state, action) => {
			state.data = action.payload;
			// syncLocal(action.payload);
		},
		removeAuth: (state, _action) => {
			state.data = initialState;
			syncLocal({});
		},
		refreshtoken: (state, action) => {
			state.data.token = action.payload;
		},
	},
});

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth, refreshtoken } = authSlice.actions;

export const authSeletor = (state: any) => state.authReducer.data;

const syncLocal = (data: any) => {
	localStorage.setItem(localDataNames.authData, JSON.stringify(data));
};