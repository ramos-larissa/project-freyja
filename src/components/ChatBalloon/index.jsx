import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./styles.css";

export default function ChatBallon({ name, button }) {
  const [text, setText] = useState("");
  const [buttonContent, setButtonContent] = useState(['', '']);

  useEffect(() => {
    setText(name);
    setButtonContent(button);
  }, [name]);

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
        <Button sx={{ mr: 2 }} variant="contained" color="success" href={buttonContent[0][1]}>{buttonContent[0][0]}</Button>
        <Button sx={{ ml: 2 }} color="error" variant="outlined" href={buttonContent[1][1]}>{buttonContent[1][0]}</Button>
      </div>
    </>
  );
}
