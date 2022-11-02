import React from "react";
import "./styles.css";
import PandaShy from "../../assets/panda/panda-shy.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Error() {
  return (
    <div className="error-body">
      <div className="error-effect-sky"></div>
      <div className="error-effect-grass"></div>
      <div className="error-container-img">
        <Card sx={{ maxWidht: 1000 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18}}
              color="text.secondary"
              gutterBottom
            >
              OPS ...
            </Typography>
            <Typography variant="body2">
              This is not a so valid option, when can try again?
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ ml: 1, mb: 1 }} variant="contained" color="success" size="small" href="/step1">CLICK ME, PLEASE!</Button>
          </CardActions>
        </Card>
        <img src={PandaShy} alt="Panda Shy" className="error-img" />
      </div>
    </div>
  );
}
