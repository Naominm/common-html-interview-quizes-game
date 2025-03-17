
import { useState,useEffect } from "react";

import "./Game.css";

function Game(){
    const[questions,setQuestions]=useState([]);

    const[currentQuestionIndex,setCurrentQuestionIndex]=useState(0);

    const [error,setError]=useState("")

     async function fetchQuiz(){
        try{
          const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=x2lv8eYb5NIPZe8E3rYIEHYgVjHoA4hLeUsoP0ly&limit=10&tags=HTML`)

const data=await response.json();
setQuestions(data);
        }catch(error){
setError("Error fetching html Questions")
        }
    }
    useEffect(()=>{
     fetchQuiz();
    },[])

    return(
        <div className="game-parent-container">
      <h1 className="game-title">HTML QUIZ CHALLENGE</h1>
      
        <div className="current-question">
        {questions.length===0?(
        <p>loading questions....</p>
      ) :(
        <p>{currentQuestionIndex+1}:{questions[currentQuestionIndex].question}</p>
      )}

        </div>
     

        </div>
    )
}

export default Game;