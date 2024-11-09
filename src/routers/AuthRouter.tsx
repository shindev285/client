import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";
import { Typography } from "antd";
import avatar from "../assets/images/avatar.png";
const { Title } = Typography;
const AuthRouter = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-none d-lg-block text-center" style={
            {marginTop:'15%'}
          }>
            <div className="md-4 ">
              <img
                src={avatar}
                alt=""
                style={{ width: 300, height: 300, objectFit: "cover" }}
              />
            </div>
            <div>
              <Title level={2} style={{
              color: "#F04438",
            }}>Lavu’s shoesshop</Title>
            </div>
          </div>
          <div className="col content-center">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthRouter;
