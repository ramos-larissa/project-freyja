import React from "react";
import "./styles.css";
import Menu from "../../components/Menu";

export default function Main() {
  const text = "Hello World";
  return (
    <div className="main-body">
      <Menu/>
      {/* <div className="footer">
        <p>teste</p>
      </div> */}
    </div>
  );
}
