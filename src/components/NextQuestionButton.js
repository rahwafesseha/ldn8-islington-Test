import React from "react";

function NextQuestionButton({
  currentQuestion,
  setCurrentQuestion,
  questions,
  setShowTotalScore,
  disabled,

  selectedAnswers,
}) {
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowTotalScore(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAnswers[currentQuestion] === undefined)
      alert(`Please Select an answer`);
  };

  return (
    <button
      className="next-question"
      onClick={(event) => {
        nextQuestion();
        handleSubmit(event);
      }}
      disabled={disabled}
    >
      Next Question
    </button>
  );
}

export default NextQuestionButton;
