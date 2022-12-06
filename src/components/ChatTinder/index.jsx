import React, { useEffect, useState } from "react";
import "./styles.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DuckProfile from "../../assets/duck/heart-duck.webp"

export default function Chattinder() {
    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 25 }}
                    color="text.secondary"
                    className="header-chat"
                    
                >
                    <img src={DuckProfile} className="duck-profile"/>
                    Dustrid
                </Typography>
                <Typography variant="body2">
                    Let's go to the next page and see if you can help me.
                </Typography>
            </CardContent>
            <CardActions> 
                <Button sx={{ ml: 1, mb: 1 }} variant="contained" color="success" size="small" href="/step3">GO!</Button>
            </CardActions>
        </Card>
    )

}