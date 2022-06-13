import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./sass/_global.scss";
import "./sass/_typography.scss";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
