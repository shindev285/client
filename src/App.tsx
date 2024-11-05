import React from "react";
import "./App.css";
import Router from "./routers/Router";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // colorTextHeading: "#F04438",
            // colorTextLabel: '#000000',
            // colorPrimary:'#F15E2B',
            colorLink: "#F04438",
            borderRadius: 2,
          },
          components: {
            // Thêm các cấu hình khác cho component ở đây nếu cần
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </>
  );
}

export default App;
