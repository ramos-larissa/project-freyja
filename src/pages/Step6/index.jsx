import React, { useEffect, useState } from "react";
import "./styles.css";
import ChatBallon from "../../components/ChatBalloon";
import PandaHello from "../../assets/panda/panda-hello.png";

export default function Step5() {
  const text1 =
    "YEAAAH! We have a match, are you ready to help me to make a new frifgdfgfgdgdgfdgdgfsefgend?";
  const buttonContent = [["Ja", "/step6"], ["Nei", "/error"]];
  return (
    <div className="step1-body">
      <div className="step1-effect-grass"></div>
      <ChatBallon name={text1} button={buttonContent}/>
      <div className="step1-container-img">
        <img src={PandaHello} alt="Panda Hello" className="step1-img" />
      </div>

    </div>
  );
}