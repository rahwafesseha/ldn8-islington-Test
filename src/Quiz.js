import React, { useState } from "react";
import questions from "./data.json";
import "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);

  function restartQuiz() {
    setCurrentQuestion(0);
    setShowScore(0);
    setShowTotalScore(false);
  }

  function choiceClicked(isAnswer) {
    if (isAnswer) {
      setShowScore(showScore + 1);

      //    style={{backgroundColor: choice.isCorrect ? "Green" : "white"}}
      // style={{ backgroundColor: "Green" }}
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowTotalScore(true);
    }
  }

  return (
    <div>
      <h2 style={{ color: "tomato" }}> Score: {showScore}</h2>
      <h2 className="question-number">
        Question{currentQuestion + 1}/{questions.length}
      </h2>
      {showTotalScore ? (
        <div className="total-score">
          <h1 style={{ color: "tomato" }}>
            Game Ended! You Scored {showScore} Out Of {questions.length}
          </h1>

          <button onClick={() => restartQuiz()} className="restart-button">
            Restart the game
          </button>
        </div>
      ) : (
        <div className="question-card">
          {/* {questions[currentQuestion].answer} */}
          <h3>{questions[currentQuestion].text}</h3>
          <ul className="choices">
            {questions[currentQuestion].choices.map((choice) => {
              return (
                <li
                  className="choice"
                  key={choice.id}
                  onClick={() => choiceClicked(choice.isAnswer)}
                  //   style={{
                  //     backgroundColor: choice.isAnswer ? "Green" : "red",
                  //   }}
                >
                  {choice.answer}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
