import React, { useEffect, useState } from "react";
import "./styles.css";
import ChatBallon from "../../components/ChatBalloon";
import PandaHello from "../../assets/panda/panda-hello.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Step1() {
  const text1 =
    "Oh, hello! Can you help me? I'm having trouble making decisions.";
  const buttonContent = [["Ja", "/step2"], ["No", "/error"]];
  return (
    <div className="step1-body">
      <ChatBallon name={text1} button={buttonContent}/>
      <div className="step1-container-img">
        <img src={PandaHello} alt="Panda Hello" className="step1-img" />
      </div>
    </div>
  );
}