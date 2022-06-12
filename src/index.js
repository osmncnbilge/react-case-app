import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/_global.scss";
import "./sass/_typography.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
