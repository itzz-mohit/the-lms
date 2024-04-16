import React, { useState } from "react";
import { quizQuestions } from "../../utils/quiz-data"; // Assuming quizQuestions is imported

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Quiz Complete! Your Score: {score}/{quizQuestions.length}
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1}/{quizQuestions.length}
            </h2>
            <p className="text-lg mb-4">
              {quizQuestions[currentQuestion].question}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
