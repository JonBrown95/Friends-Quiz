import React, { useState } from "react";
import quizData from "./quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return <h1 className="font-bold">Quiz</h1>;
};

export default Quiz;
