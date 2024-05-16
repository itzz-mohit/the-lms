import React, { useState } from "react";

import { quizQuestions } from "../../utils/quiz-data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCorrectAnswer(quizQuestions[currentQuestion].answer);

    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCorrectAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="w-full  p-8 bg-white shadow-lg rounded-lg">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
          <p className="text-lg mb-4">
            Your score: {score} out of {quizQuestions.length}
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl mb-4 font-semibold">
            Question {currentQuestion + 1}/{quizQuestions.length}
          </h2>
          <p className="text-lg mb-6">
            {quizQuestions[currentQuestion].question}
          </p>
          <div className="flex flex-col space-y-4 w-1/3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border border-cyan-800 w-38 ${
                  selectedOption
                    ? option === quizQuestions[currentQuestion].answer
                      ? "bg-green-300 text-white"
                      : option === selectedOption
                      ? "bg-red-300 text-white"
                      : ""
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button
              className="mt-6 bg-cyan-800 text-white px-4 py-2 rounded-lg "
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
