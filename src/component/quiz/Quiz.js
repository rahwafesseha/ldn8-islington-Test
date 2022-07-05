import React, { useState } from "react";
import questions from "../data.json";
import "./Quiz.css";
import NextQuestionButton from "./NextQuestionButton";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);
  const [Correct, setCorrect] = useState();

  function calculatedScore() {
    let correctAnswers = selectedAnswers.filter((selectedAnswer, index) => {
      return selectedAnswer.isAnswer;
    });
    return correctAnswers.length;
  }
  function restartQuiz() {
    setCurrentQuestion(0);
    setShowTotalScore(false);
  }

  function choiceClicked(choice) {
    let newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = choice;
    setSelectedAnswers(newSelectedAnswers);
    if (choice.isAnswer) {
      setCorrect(choice.id);
    }
  }

  return (
    <div>
      <h2 className="question-number">
        Question: {currentQuestion + 1}/{questions.length}
        <span className="score" style={{ color: "tomato" }}>
          Score: {calculatedScore()}
        </span>
      </h2>

      {showTotalScore ? (
        <div className="total-score">
          <h1 style={{ color: "tomato", textAlign: "center" }}>
            Quiz Ended! You Scored {calculatedScore()} Out Of {questions.length}
          </h1>

          <button onClick={() => restartQuiz()} className="restart-button">
            Restart the game
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h3>{questions[currentQuestion].text}</h3>
          {questions[currentQuestion].image ? (
            <img src={questions[currentQuestion].image} alt={""} />
          ) : null}
          <ul className="choices">
            {questions[currentQuestion].choices.map((choice) => {
              return (
                <li
                  className="choice"
                  key={choice.id}
                  onClick={() => choiceClicked(choice)}
                  style={{
                    background:
                      selectedAnswers[currentQuestion]?.id === choice.id
                        ? "green"
                        : "white",
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
            questions={questions}
            setShowTotalScore={setShowTotalScore}
            disabled={selectedAnswers[currentQuestion] === undefined}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
