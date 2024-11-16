
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
