import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/Pages/homePage/HomePage";
import {URL} from "./components/API/URL";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <HomePage url={URL} />
  </React.Fragment>
);
