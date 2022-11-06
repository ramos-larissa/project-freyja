import React, {useState} from "react";
import "../styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Algiz from "../../../../assets/runes/algiz.webp";
import Alert from '@mui/material/Alert';
import Divider from "@mui/material/Divider";

export default function Quiz1( {quiz1ToParent}) {
  const [value, setValue] = useState(0);
  const success = true;
  
  const response = (res) => {
      setValue(res);
  };
  
  const optionRight = () => {
    response(1);
    quiz1ToParent(success);
  };

  const optionWrong = () => {
    response(2);
  };

  return (
    <>
      <div className="puzzle-runes-container">
        <Card sx={{ m: 2, width: 250 }}>
          <CardContent>
            <div className="puzzle-runes-img">
              <img src={Algiz} />
            </div>
            <div className="puzzle-runes-options">
              { value === 2 ? (<Alert className="puzzle-runes-alert" severity="error">Oh noes, try again!</Alert>) : value === 1 ? (<div></div>) : (<Button onClick={optionWrong}>Jera</Button>) }
              { value === 1 ? (<Alert className="puzzle-runes-alert" severity="success">A powerful rune of physical protection and defense</Alert>) : (<Button onClick={optionRight}>Ihwaz/Algiz</Button>) }
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
