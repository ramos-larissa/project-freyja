import React from "react";
import "../styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Algiz from "../../../../assets/runes/algiz.webp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Quiz1() {

  const optionC = () => {
    alert("Correct!");
  }

  return (
    <>
      <div className="puzzle-runes-container">
        <Card sx={{ m: 2, width: 250 }}>
          <CardContent>
            <div className="puzzle-runes-img">
              <img src={Algiz} />
            </div>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Puzzle
            </Typography>
           <Button>teste</Button>
           <Button onClick={optionC}>teste 2</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
