import React from "react";

function NextQuestionButton({
  currentQuestion,
  setCurrentQuestion,
  setCorrect,
  questions,
  setShowTotalScore,
  disable,
  setDisable,
}) {
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setCorrect();
      setDisable(true);
    } else {
      setShowTotalScore(true);
    }
  };

  return (
    <button
      className="next-question"
      onClick={() => nextQuestion()}
      disabled={disable}
    >
      Next Question
    </button>
  );
}

export default NextQuestionButton;
