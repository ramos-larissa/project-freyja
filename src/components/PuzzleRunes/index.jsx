import React from 'react'
import "./styles.css";
import Quiz1 from "./templates/quiz1";
import Quiz2 from "./templates/quiz2";
import Quiz3 from "./templates/quiz3";
import Quiz4 from "./templates/quiz4";
import Quiz5 from "./templates/quiz5";


export default function PuzzleRunes() {
    return (
     <div className='quiz-container'>
       <Quiz1 />
       <Quiz2 />
       <Quiz3 />
       <Quiz4 />
       <Quiz5 />
     </div>
    )
}