import React from "react";

function NextQuestionButton({
  currentQuestion,
  setCurrentQuestion,
  setCorrect,
}) {
  return (
    <button
      onClick={() => {
        setCurrentQuestion(currentQuestion + 1);
        setCorrect();
      }}
      className="next-question"
    >
      Next Question
    </button>
  );
}

export default NextQuestionButton;
