import React from "react";
import "../styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Inguz from "../../../../assets/runes/inguz.png";

export default function Quiz3() {
  return (
    <>
      <div className="puzzle-runes-container">
        <Card sx={{ m: 2, width: 250 }}>
          <CardContent>
            <img src={Inguz} className="runes-inguz-img"/>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Puzzle
            </Typography>
            <Typography variant="body2">thor</Typography>
            <Typography variant="body2">odin</Typography>
            <Typography variant="body2">algiz</Typography>
            <Typography variant="body2">not all above</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
