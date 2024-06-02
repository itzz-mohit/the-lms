import React, { useEffect, useState } from "react";
import Quiz from "../Quiz/Quiz";
import { getValidityApi } from "../../services/validity-api";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const QuizBanner = () => {
  const { userData } = useSelector((state) => state.auth);
  const userId = userData._id;
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("id");
  const [showQuizBanner, setShowQuizBanner] = useState(true);
  const [quizSubmitted, setQuizSubmitted] = useState(true);

  const checkValidity = async () => {
    try {
      const response = await getValidityApi(userId, courseId);
      setQuizSubmitted(response.data.quiz);
      // console.log(response);
      // console.log(response.data.quiz);
    } catch (error) {
      console.log("Error while getting the validity");
      console.error(error);
    }
  };

  const handleQuiz = () => {
    setShowQuizBanner(false);
  };

  useEffect(() => {
    if (courseId) {
      checkValidity();
    }
  }, [courseId]);

  return (
    <div className="h-full flex flex-col ">
      {!quizSubmitted ? (
        <div className="flex items-center justify-center w-full h-full bg-white shadow-xl py-48 ">
          <h1 className="text-3xl text-gray-700 flex items-center justify-center">
            Quiz Already Submitted!!
          </h1>
        </div>
      ) : showQuizBanner ? (
        <div className="flex flex-col pt-9 px-7 pb-52">
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
              <button className="px-4 py-2 border border-cyan-800 text-cyan-800 rounded shadow hover:bg-cyan-800 hover:text-white">
                Start
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-5 h-6 mt-0 inline font-bold"
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
    </div>
  );
};

export default QuizBanner;
