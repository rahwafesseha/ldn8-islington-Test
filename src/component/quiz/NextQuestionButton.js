import React from "react";

function NextQuestionButton({
  currentQuestion,
  setCurrentQuestion,
  setCorrect,
  questions,
  setShowTotalScore,
 disabled
}) {
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    //  setCorrect(); 
     
    } else {
      setShowTotalScore(true);
    }
  };

  return (
    <button
      className="next-question"
      onClick={() => nextQuestion()}
      disabled={disabled}
   
    >
      Next Question
    </button>
  );
}

export default NextQuestionButton;
