import React, { useState } from "react";
import questions from "../data.json";
import "./Quiz.css";

import NextQuestionButton from "./NextQuestionButton";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);
  const [Correct, setCorrect] = useState();

  function restartQuiz() {
    setCurrentQuestion(0);
    setShowScore(0);
    setShowTotalScore(false);
  }

  function choiceClicked({ isAnswer, id }) {
    if (isAnswer) {
      setShowScore(showScore + 1);
      setCorrect(id);
    }
  }

  return (
    <div>
      <h2 className="question-number">
        Question: {currentQuestion + 1}/{questions.length}
        <span className="score" style={{ color: "tomato" }}>
          Score: {showScore}
        </span>
      </h2>
      {showTotalScore ? (
        <div className="total-score">
          <h1 style={{ color: "tomato" }}>
            Quiz Ended! You Scored {showScore} Out Of {questions.length}
          </h1>

          <button onClick={() => restartQuiz()} className="restart-button">
            Restart the game
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h3>{questions[currentQuestion].text}</h3>
          <ul className="choices">
            {questions[currentQuestion].choices.map((choice) => {
              return (
                <li
                  className="choice"
                  key={choice.id}
                  onClick={() => choiceClicked(choice)}
                  style={{
                    background: Correct === choice.id ? "Green" : "white",
                  }}
                >
                  {choice.answer}
                </li>
              );
            })}
          </ul>
          <NextQuestionButton
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setCorrect={setCorrect}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
