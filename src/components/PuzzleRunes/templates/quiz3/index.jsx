import React, { useState } from "react";
import "../styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Inguz from "../../../../assets/runes/inguz.png";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function Quiz3({ quiz3ToParent }) {
  const [value, setValue] = useState(0);
  const success = true;

  const response = (res) => {
    setValue(res);
  };

  const optionRight = () => {
    response(1);
    quiz3ToParent(success);
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
              <img src={Inguz} />
            </div>
            <div className="puzzle-runes-options">
              {value === 2 ? (
                <Alert className="puzzle-runes-alert" severity="error">
                  Oh noes, try again!
                </Alert>
              ) : value === 1 ? (
                <div></div>
              ) : (
                <Button onClick={optionWrong}>Uruz</Button>
              )}
              {value === 1 ? (
                <Alert className="puzzle-runes-alert" severity="success">
                  Rune of achievements and new stages.
                </Alert>
              ) : (
                <Button onClick={optionRight}>Inguz</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
