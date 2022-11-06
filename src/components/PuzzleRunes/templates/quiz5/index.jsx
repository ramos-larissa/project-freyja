import React, { useState } from "react";
import "../styles.css";
import Eihwaz from "../../../../assets/runes/eihwaz.webp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert"

export default function Quiz5({ quiz5ToParent }) {
  const [value, setValue] = useState(0);
  const success = true;

  const response = (res) => {
    setValue(res);
  };

  const optionRight = () => {
    response(1);
    quiz5ToParent(success);
  };

  const optionWrong = () => {
    response(2);
  };
  return (
    <>
      <div className="puzzle-runes-container">
        <Card sx={{ m: 2, width: 250 }}>
          <CardContent>
          <div className="puzzle-runes-img">
              <img src={Eihwaz} />
            </div>
            <div className="puzzle-runes-options">
              {value === 2 ? (
                <Alert className="puzzle-runes-alert" severity="error">
                  Oh noes, try again!
                </Alert>
              ) : value === 1 ? (
                <div></div>
              ) : (
                <Button onClick={optionWrong}>teste</Button>
              )}
              {value === 1 ? (
                <Alert className="puzzle-runes-alert" severity="success">
                  Good job!
                </Alert>
              ) : (
                <Button onClick={optionRight}>teste</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
