import React, { useEffect, useState } from "react";
import "../styles.css";
import Panda from "../../../../assets/panda/panda-heart-eyes.png";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Success() {
  return (
    <div className="puzzle-success-container">
      <Card sx={{ width: 815 }}>
        <CardContent className="puzzle-success-content">
          <h3>You are great!</h3>
          <div>
            <p> Thank you for help me!!!!</p>
            <img src={Panda} className="puzzle-success-img" />
          </div>
          <div>
            <Button variant="contained" href="/step4">
              Next challenge
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
