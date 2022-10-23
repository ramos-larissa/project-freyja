import React from "react";
import "./styles.css";
import ChatBallon from "../../components/ChatBalloon";
import PandaHello from "../../assets/panda/panda-hello.png";
import { Button } from "@react-bulk/web";

export default function Step1() {
  return (
    <div className="step-body">
      <ChatBallon />
      <div className="container-img">
        <img src={PandaHello} alt="Panda Hello" className="img-step1" />
        <Button>Next</Button>
        <Button>Back</Button>
      </div>
    </div>
  );
}
