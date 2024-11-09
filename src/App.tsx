
import "./App.css";
import Routers from "./routers/Routers";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store";

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
          components: {},
        }}
      >
        <Provider store={store}>
          <Routers />
        </Provider>
      </ConfigProvider>
    </>
  );
}

export default App;
