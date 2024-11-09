import React from 'react';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import { authSelector, AuthState } from '../redux/reducers/authReducer';
import  { useDispatch, useSelector } from "react-redux"
const Routers = () => {
  const auth: AuthState = useSelector(authSelector);
  // gửi thông tin xuống store 
  const dispatch = useDispatch();
  
  return (

    !auth.token ? <AuthRouter /> : <MainRouter />
  );
};


export default Routers;