
import { useState,useEffect } from "react";

import "./Game.css";

function Game(){
    const[questions,setQuestions]=useState([]);

    const[currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
    const[selectedAnswer,setSelectedAnswer]=useState('')

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

    function handleNext(){
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedAnswer(""); 
        } 
    }
    function handlePrev(){
        if (currentQuestionIndex >0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
            setSelectedAnswer(""); 
        }
    }
    function handleAnswerChange(answer) {
        setSelectedAnswer(answer);
    }

    return(
        <div className="game-parent-container">
      <h1 className="game-title">HTML QUIZ CHALLENGE</h1>
      <div className="parent-quiz-content">
      
        <div className="current-question">
        {questions.length===0?(
        <p>loading questions....</p>
      ) :(
        <p>{currentQuestionIndex+1}:{questions[currentQuestionIndex].question}</p>
      )}

        </div>
        <div className="selection-options">
        {questions.length > 0 && questions[currentQuestionIndex]?.answers && (
            <div className="parent-list-container">
            <ul className="unordered-list">
        {Object.entries(questions[currentQuestionIndex].answers)
         .filter(([_, value]) => value)
        .map(([key,value])=>(
         <li key={key}>
            <input type="checkbox" className="check-box"
            value={key}
            checked={selectedAnswer===key}
            onChange={()=>{handleAnswerChange(key)}}
            />
            {value}
         </li>
        ))}
        </ul>
        </div>
        )}
        </div>
        <div className="navigation-buttons">
            <button onClick={handlePrev} disabled={currentQuestionIndex==0}>previous Question</button>
            <button onClick={handleNext} disabled={currentQuestionIndex===questions.length-1}>Next Question</button>
        </div>
     
        </div>
        </div>
    )
}

export default Game;