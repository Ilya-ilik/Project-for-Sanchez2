import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/Pages/homePage/HomePage";
import config from "./components/API/config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <HomePage config={config} />
  </React.Fragment>
);
