import React from 'react'
import "./styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Algiz from "../../../../assets/runes/algiz.webp";


export default function Quiz1() {
    return (
     <>
        <div className="puzzle-runes-container">
        <Card sx={{mt: 10, maxWidth: 500}}>
          <CardContent>
            <img src={Algiz} />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Puzzle
            </Typography>
            <Typography variant="body2">
                thor
            </Typography>
            <Typography variant="body2">
             odin
            </Typography>
            <Typography variant="body2">
             algiz
            </Typography>
            <Typography variant="body2">
             not all above
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="/step3">GO!</Button>
          </CardActions>
        </Card>
        </div>
     </>
    )
}