import React, { useState } from "react";
import "./Mocktest.css";
import questions from "../assets/mocktest.json";

const Mocktest2 = () => {
  const [currentquestion, setCurrentquestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleansweroptionclick = (option) => {
    setSelectedAnswer(option);

    if (option === questions[currentquestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  const nextquestion = () => {
    if (currentquestion < questions.length - 1) {
      setCurrentquestion(currentquestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };
  const previousQuestion = () => {
    if (currentquestion > 0) {
      setCurrentquestion(currentquestion - 1);
      setSelectedAnswer(null);
    }
  };
  const reset = () => {
    setCurrentquestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="app">
      {showScore ? (
        <>
          <div className="score-section">
            {" "}
            You Scored {score} our of {questions.length}{" "}
          </div>
          <button onClick={reset} className="reset-btn">
            {" "}
            Reset
          </button>
        </>
      ) : (
        <div className="question-section">
          <h1>Mock Test 1 </h1>
          <div className="question-count">
            <span>Question {currentquestion + 1}</span>/ {questions.length}
          </div>
          <div className="question-text">
            <p>{questions[currentquestion].textenglish}</p>
            <p>{questions[currentquestion].texthindi}</p>
          </div>
          <div className="answer-section">
            {questions[currentquestion].options.map((option, index) => (
              <>
                {" "}
                <div key={index} className="option">
                  <input
                    type="radio"
                    style={{ width: "18px", height: "18px" }}
                    name="option"
                    checked={selectedAnswer === option}
                    onChange={()=>handleansweroptionclick(option)}
                  />
                  <button
                    onClick={() => handleansweroptionclick(option)}
                    className={
                      selectedAnswer === option
                        ? option === questions[currentquestion].correctAnswer
                          ? "green"
                          : "red"
                        : ""
                    }
                  >
                    {" "}
                    {option}
                  </button>{" "}
                </div>
              </>
            ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={previousQuestion} disabled={currentquestion === 0}>
              Previous
            </button>
            <button onClick={nextquestion}>
              {currentquestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
          <div>score : {score}</div>

          <p className="developerName"> Website is Created by Lalit Kumar </p>
        </div>
      )}
    </div>
  );
};

export default Mocktest2;
