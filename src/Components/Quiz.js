import React, { useState, useEffect } from "react";
import quizData from "../quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // logic for timer
  useEffect(() => {
    if (quizStarted && !showResult) {
      const timer = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          setShowResult(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, quizStarted, showResult]);

  // logic for resetting the quiz back to the beginning.
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setTimeLeft(60);
  };

  // button that starts the quiz
  const startQuiz = () => {
    setQuizStarted(true);
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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[400px] h-[400px] p-6 bg-white rounded-lg shadow-md border border-gray-300 overflow-y-auto"
        role="region"
        aria-labelledby="quiz-heading">
        {!quizStarted ? (
          <div>
            <p>Ready to start?</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        ) : !showResult ? (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              <p>Time Left: {timeLeft} seconds</p>
              Question {currentQuestion + 1} -
            </h2>
            <h3 className="text-xl mb-4">
              {quizData[currentQuestion].question}
            </h3>
            <div className="grid gap-3">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => handleAnswerClick(option)}
                  aria-label={`Option ${index + 1}: ${option}`}
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={resetQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
