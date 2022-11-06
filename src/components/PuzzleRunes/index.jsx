import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Quiz1 from "./templates/quiz1";
import Quiz2 from "./templates/quiz2";
import Quiz3 from "./templates/quiz3";
import Quiz4 from "./templates/quiz4";
import Quiz5 from "./templates/quiz5";
import Success from "./templates/success";

export default function PuzzleRunes() {
  const [data, setData] = useState("");
  const [quiz1, setQuiz1] = useState("");
  const [quiz2, setQuiz2] = useState("");
  const [quiz3, setQuiz3] = useState("");
  const [quiz4, setQuiz4] = useState("");
  const [quiz5, setQuiz5] = useState("");

  const quiz1ToParent = (childdata) => {
    setQuiz1(childdata);
    console.log(quiz1);
  };

  const quiz2ToParent = (childdata) => {
    setQuiz2(childdata);
    console.log(quiz2);
  };

  const quiz3ToParent = (childdata) => {
    setQuiz3(childdata);
    console.log(quiz3);
  };

  const quiz4ToParent = (childdata) => {
    setQuiz4(childdata);
    console.log(quiz4);
  };

  const quiz5ToParent = (childdata) => {
    setQuiz5(childdata);
    console.log(quiz5);
  };

  useEffect(() => {
    if (quiz1 && quiz2 && quiz3 && quiz4 && quiz5) {
      setData(<Success/>);
    }
  }, [quiz1, quiz2, quiz3, quiz4, quiz5]);

  return (
    <div>
      <div className="puzzle-quiz-container">
        <Quiz1 quiz1ToParent={quiz1ToParent} />
        <Quiz2 quiz2ToParent={quiz2ToParent} />
        <Quiz3 quiz3ToParent={quiz3ToParent} />
        <Quiz4 quiz4ToParent={quiz4ToParent} />
        <Quiz5 quiz5ToParent={quiz5ToParent} />
      </div>
      {data}
    </div>
  );
}
