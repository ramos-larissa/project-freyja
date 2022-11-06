import React, { useEffect, useState } from "react";
import "./styles.css";
import PuzzleRunes from "../../components/PuzzleRunes";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Step2() {
  const [data, setData] = useState("");
  return (
    <div className="step3-body">
      <div className="step3-container-description">
        <Card sx={{ width: 815 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 24 }}
              color="text.secondary"
              gutterBottom
            >
              What is the correct option?
            </Typography>
            <Typography variant="body2">
              Choose the name and corresponding meaning of each rune
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="step3-container-quiz">
        <PuzzleRunes />
      </div>
    </div>
  );
}
