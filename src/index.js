import React from "react";
import ReactDOM from "react-dom";
import Routes from "./config/routes";
import ReactBulk from "@react-bulk/core";

ReactDOM.render(
  <ReactBulk>
    <Routes />
  </ReactBulk>,
  document.getElementById("root")
);
