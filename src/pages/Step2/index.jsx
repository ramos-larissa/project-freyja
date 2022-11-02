import React, { useEffect, useState } from "react";
import "./styles.css";
import ChatBallon from "../../components/ChatBalloon";
import PandaHello from "../../assets/panda/panda-hello.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Step2() {
  return (
    <div className="step-body">
      <div className="container-img">
        <img src={PandaHello} alt="Panda Hello" className="img-step1" />
      </div>
    </div>
  );
}
