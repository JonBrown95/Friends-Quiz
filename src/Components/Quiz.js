import React, { useState } from "react";
import quizData from "../quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // logic for resetting the quiz back to the beginning.
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
      {!showResult ? (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Question {currentQuestion + 1} -
          </h2>
          <h3 className="text-xl mb-4">{quizData[currentQuestion].question}</h3>
          <div className="grid gap-3">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-4">Result</h2>
          <p>Your score: {score}</p>
          <button className="bg-blue-500 text-white " onClick={resetQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
