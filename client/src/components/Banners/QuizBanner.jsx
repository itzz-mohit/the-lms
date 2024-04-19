import React, { useState } from "react";
import Quiz from "../Quiz/Quiz";

const QuizBanner = () => {
  const [showQuizBanner, setShowQuizBanner] = useState(true);
  //   const [showQuiz, setShowQuiz] = useState(false);

  const handleQuiz = () => {
    setShowQuizBanner(false);
  };
  return (
    <>
      {showQuizBanner ? (
        <div className="flex flex-col ps-5 pb-5 mt-6 shadow-lg">
          <h1 className="text-2xl mb-4">
            You Are About To Start A Quiz: &nbsp;What You Learn?
          </h1>

          <p className="text-gray-600">
            Click <span className="font-semibold text-black">Start</span> to
            continue the quiz.
          </p>
          <div className="mt-4">
            <div className="mr-2 text-gray-600 mb-4">Attempts Left: 1</div>
            <div className="flex" onClick={handleQuiz}>
              <button className="px-4 py-2 border border-blue-700 text-blue-700  rounded shadow hover:bg-blue-700 hover:text-white">
                Start
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-5 h-6 mt-0 inline  font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Quiz />
      )}
    </>
  );
};

export default QuizBanner;