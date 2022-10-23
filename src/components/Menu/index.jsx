import React from "react";
import ButtonNext from "../ButtonNext";
import "./styles.css";

export default function Menu() {
    const play = ["Play", "/Step1"];
    const about = ["About", "/about"];
  return (
    <div className="container">
      <div className="menu-options">
        <ButtonNext data={play}/>
        <ButtonNext data={about}/>
      </div>
    </div>
  );
}
