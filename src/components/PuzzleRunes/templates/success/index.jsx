import React, { useEffect, useState } from "react";
import "../styles.css";
import Panda from "../../../../assets/panda/panda-heart-eyes.png";
import { Button } from "@mui/material";

export default function Success() {
  return (
    <div>
       <div className="puzzle-success">
          <h3>Good job!</h3>
          <p> Thank you for help me, you are great.</p>
          <Button variant="contained" href="/step4">
            Next challenge
          </Button>
        </div>
    </div>
  );
}
