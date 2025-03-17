
import { useState,useEffect } from "react";

import "./Game.css";

function Game(){
    const[questions,setQuestions]=useState([]);

     async function fetchQuiz(){
        const response=await fetch(` 'https://quizapi.io/api/v1/questions?apiKey=x2lv8eYb5NIPZe8E3rYIEHYgVjHoA4hLeUsoP0ly&limit=10&tags=HTML'`)
const data=await response.json();
setQuestions(data);
    }
    useEffect(()=>{
     fetchQuiz();
    },[])

    return(
        <div className="game-parent-container">
      <h1 className="game-title">HTML QUIZ CHALLENGE</h1>

        </div>
    )
}

export default Game;