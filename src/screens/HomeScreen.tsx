import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { removeAuth } from "../redux/reducers/authReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const logout = () => {
    // Dispatch logout action để xóa dữ liệu user từ Redux
    dispatch(removeAuth({}));
  };
  return (
    <div>
      <Button onClick={logout}>Log-out</Button>
    </div>
  );
};

export default HomeScreen;
