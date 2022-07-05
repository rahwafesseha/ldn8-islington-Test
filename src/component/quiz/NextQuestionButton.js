import React from "react";

function NextQuestionButton({
  currentQuestion,
  setCurrentQuestion,
  setCorrect,
  questions,
  setShowTotalScore,
}) {
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setCorrect();
    } else {
      setShowTotalScore(true);
    }
  };

  return (
    <button className="next-question" onClick={() => nextQuestion()}>
      Next Question
    </button>
  );
}

export default NextQuestionButton;
