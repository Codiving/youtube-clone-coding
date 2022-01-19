import Youtube from "api/youtube";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
