import React, { useState, useEffect } from "react";
import { getQuizApi } from "../../services/quiz-api";
import { useSearchParams } from "react-router-dom";

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("id");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const getQuiz = async (courseId) => {
    try {
      const response = await getQuizApi(courseId);
      console.log(response.response);
      setQuizQuestions(response.response);
    } catch (error) {
      console.log("Unable to fetch quiz questions");
      console.error(error);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (courseId) {
      getQuiz(courseId);
    }
  }, [courseId]);

  return (
    <div className="min-h-screen bg-white shadow-xl">
      <div className="flex justify-center p-6 flex-col mx-44 ">
        {!showScore && (
          <div className="flex flex-col items-start">
            <h1 className="text-green-500">
              QUESTION {currentQuestion + 1}/{quizQuestions.length}
            </h1>
            <h1 className="text-2xl">Quiz: What You Learn?</h1>
          </div>
        )}
        {!showScore && (
          <hr className="w-full border-t-2 border-gray-200 my-4" />
        )}
        {showScore ? (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-600">Quiz Completed</h2>
            <p className=" mb-4">
              Your score: {score} out of {quizQuestions.length}
            </p>
          </div>
        ) : (
          <>
            {quizQuestions.length > 0 && (
              <>
                <h1 className="mb-5 text-xl text-slate-500">
                  {quizQuestions[currentQuestion].question}
                </h1>
                <div className="flex flex-col space-y-3">
                  {quizQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`w-full border border-gray-200 p-4 cursor-pointer ${
                          selectedOption
                            ? option === quizQuestions[currentQuestion].answer
                              ? "bg-green-200"
                              : option === selectedOption
                              ? "bg-red-200"
                              : ""
                            : ""
                        }`}
                        onClick={() => handleOptionClick(option)}
                      >
                        <div className="text-slate-800">
                          <p>{option}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            )}
            <div className="w-11/12 py-2">
              <button
                className="text-white bg-cyan-800 px-6 py-2 rounded-md"
                onClick={handleNextQuestion}
                disabled={!selectedOption}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
