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
  return (
    <div className="step3-body">
      <div className="step3-container-img">
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Puzzle
            </Typography>
            <Typography variant="body2">
              I'm learning about runes, I need your help with my studies.
            </Typography>
            <Typography variant="body2">
              Let's go to the next page and see if you can help me.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
      <PuzzleRunes />
      </div>
    </div>
  );
}
