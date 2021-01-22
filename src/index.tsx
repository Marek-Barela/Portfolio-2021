import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
