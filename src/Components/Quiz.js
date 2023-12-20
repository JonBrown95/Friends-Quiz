import React, { useState } from "react";
import quizData from "../quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  // logic for selecting answers
  const handleAnswerClick = (selectedAnswer) => {
    const currentAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === currentAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      {!showResult && (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Question {currentQuestion + 1}
          </h2>
          <h3 className="text-xl mb-4">{quizData[currentQuestion].question}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
