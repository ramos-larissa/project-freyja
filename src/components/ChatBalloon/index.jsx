import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./styles.css";

export default function ChatBallon({name, button}) {
  const [text, setText] = useState("");
  const [buttonContent, setButtonContent] = useState([]);
  
  useEffect(() => {
    setText(name);
    setButtonContent(button);
  }, [name]);


//   var container = document.querySelector(".text");

//   var speeds = {
//     pause: 500, //Higher number = longer delay
//     slow: 120,
//     normal: 90,
//     fast: 40,
//     superFast: 10,
//   };

//   var textLines = [
//     { speed: speeds.slow, string: "Oh, hello!" },
//     { speed: speeds.pause, string: "", pause: true },
//     { speed: speeds.normal, string: "Have you seen my pet" },
//     { speed: speeds.fast, string: "frog", classes: ["green"] },
//     { speed: speeds.normal, string: "around?" },
//   ];

//   var characters = [];
//   textLines.forEach((line, index) => {
//     if (index < textLines.length - 1) {
//       line.string += " "; //Add a space between lines
//     }

//     line.string.split("").forEach((character) => {
//       var span = document.createElement("span");
//       span.textContent = character;
//       container.appendChild(span);
//       characters.push({
//         span: span,
//         isSpace: character === " " && !line.pause,
//         delayAfter: line.speed,
//         classes: line.classes || [],
//       });
//     });
//   });

//   function revealOneCharacter(list) {
//     var next = list.splice(0, 1)[0];
//     next.span.classList.add("revealed");
//     next.classes.forEach((c) => {
//       next.span.classList.add(c);
//     });
//     var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

//     if (list.length > 0) {
//       setTimeout(function () {
//         revealOneCharacter(list);
//       }, delay);
//     }
//   }

//   setTimeout(() => {
//     revealOneCharacter(characters);
//   }, 600);

  return (
    <>
      <div className="text">
        <svg
          className="corner"
          viewBox="0 0 65 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M35 3.5L65 6.5V62L0 0L35 3.5Z" fill="white" />
        </svg>
        <p>{text}
        </p>
        <Button variant="contained" color="success" href="/step2">Ja</Button>
        <Button color="error" variant="outlined">Nei</Button>
      </div>
    </>
  );
}
