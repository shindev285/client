import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import {
  addAuth,
  authSeletor,
  AuthState,
} from "../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { localDataNames } from "../constants/appInfor";
import { Spin } from "antd";
const Routers = () => {
  const [isloading, setIsLoading] = useState(false);
  const auth: AuthState = useSelector(authSeletor);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };
  // console.log("Dữ liệu auth từ Redux :", auth);
  return isloading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
