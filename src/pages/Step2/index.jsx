import React, { useEffect, useState } from "react";
import "./styles.css";
import PandaHello from "../../assets/panda/panda-hello.png";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Step2() {
  return (
    <div className="step2-body">
      <div className="step2-effect-grass"></div>
      <div className="step2-container-img">
        <Card sx={{ maxWidht: 1000 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18}}
              color="text.secondary"
              gutterBottom
            >
              Introduction
            </Typography>
            <Typography variant="body2">
              Thank you! I'm glad you're here. I'm Panda, and I have a problem
              right now.
            </Typography>
            <Typography variant="body2">
              I'm learning about runes, I need your help with my studies.
            </Typography>
            <Typography variant="body2">
              I've been trying to figure out what this rune means.
            </Typography>
            <Typography variant="body2">
              Let's go to the next page and see if you can help me.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ ml: 1, mb: 1 }} variant="contained" color="success" size="small" href="/step3">GO!</Button>
          </CardActions>
        </Card>
        <img src={PandaHello} alt="Panda Hello" className="step2-img" />
      </div>
    </div>
  );
}
