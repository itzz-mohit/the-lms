import React, { useState } from "react";
import Welcome from "../Banners/Welcome";
import HtmlPdf from "../PdfRenders/HtmlPdf";
import { useSearchParams } from "react-router-dom";
import Docs from "../Docs/Docs";
import Quiz from "../Quiz/Quiz";
import HtmlVideo from "../CourseVideo/HtmlVideo";
import QuizBanner from "../Banners/QuizBanner";
import FeedbackForm from "../Forms/FeedbackForm";
import HtmlAssignments from "../Assignments/HtmlAssignments";
import Certificate from "../Certificate/Certificate";

const Content = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("id");

  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);

  const [showHtmlPdf, setShowHtmlPdf] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [screen, setScreen] = useState(true);
  const [quiz, setQuiz] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAssignments, setshowAssignments] = useState(false);
  const [showCertificate, setshowCertificate] = useState(false);

  const handleToggleOne = () => {
    setToggleOne(!toggleOne);
    setToggleTwo(false);
    setToggleThree(false);
  };
  const handleToggleTwo = () => {
    setToggleOne(false);
    setToggleTwo(!toggleTwo);
    setToggleThree(false);
  };
  const handleToggleThree = () => {
    setToggleOne(false);
    setToggleTwo(false);
    setToggleThree(!toggleThree);
  };

  const handleShowHtmlPdf = () => {
    setShowHtmlPdf(true);
    setShowDocs(false);
    setShowVideo(false);
  };

  const handleShowDocs = () => {
    setShowHtmlPdf(false);
    setShowDocs(true);
    setShowVideo(false);
  };

  const handleQuiz = () => {
    setShowHtmlPdf(false);
    setShowDocs(false);
    setQuiz(true);
    setShowVideo(false);
  };

  const handleVideo = () => {
    setShowHtmlPdf(false);
    setShowDocs(false);
    setQuiz(false);
    setShowVideo(true);
  };

  const handleFeedback = () => {
    setShowHtmlPdf(false);
    setShowDocs(false);
    setQuiz(false);
    setShowVideo(false);
    setShowFeedback(true);
  };

  const handleAssignments = () => {
    setShowHtmlPdf(false);
    setShowDocs(false);
    setQuiz(false);
    setShowVideo(false);
    setShowFeedback(false);
    setshowAssignments(true);
  };

  const handleCertificate = () => {
    setShowHtmlPdf(false);
    setShowDocs(false);
    setQuiz(false);
    setShowVideo(false);
    setShowFeedback(false);
    setshowAssignments(false);
    setshowCertificate(true);
  };

  return (
    <div className="flex mx-8 mt-8 gap-6">
      {screen && (
        <div className=" w-1/6" id="accordion " style={{ minHeight: "100%" }}>
          <div className="flex py-2 px-2 bg-gray-400">
            <div className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div className="font-semibold text-white">Course Content</div>
          </div>
          <div className="p-1 bg-white shadow-lg h-full">
            <div className="py-1 px-1 ">
              <div
                className="flex justify-between bg-gray-300 py-2 px-2 cursor-pointer"
                onClick={() => setToggleOne(handleToggleOne)}
              >
                <div>Module 1</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  style={{ transform: `rotate(${toggleOne ? 180 : 0}deg)` }}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {toggleOne && (
                <div className="cursor-pointer text-xs from-neutral-600 ">
                  <div
                    className="bg-gray-50 py-3 px-2  hover:bg-gray-200 border-b border-gray-300"
                    onClick={handleShowHtmlPdf}
                  >
                    Html Introduction
                  </div>
                  {/* <div
                    className="bg-gray-50 py-3 px-2 hover:bg-gray-200"
                    onClick={handleShowDocs}
                  >
                    CSS Introduction
                  </div> */}
                </div>
              )}
            </div>
            <div className="py-1 px-1 ">
              <div
                className="flex justify-between bg-gray-300 py-2 px-2 cursor-pointer"
                onClick={() => setToggleTwo(handleToggleTwo)}
              >
                <div>Module 2</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  style={{ transform: `rotate(${toggleTwo ? 180 : 0}deg)` }}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {toggleTwo && (
                <div className="cursor-pointer text-xs from-neutral-600 ">
                  <div
                    className="bg-gray-50 py-3 px-2  hover:bg-gray-200 border-b border-gray-300"
                    onClick={handleQuiz}
                  >
                    Quiz
                  </div>
                  <div
                    className="bg-gray-50 py-3 px-2 hover:bg-gray-200 border-b border-gray-300"
                    onClick={handleVideo}
                  >
                    Videos
                  </div>
                  <div
                    className="bg-gray-50 py-3 px-2 hover:bg-gray-200"
                    onClick={handleAssignments}
                  >
                    Assignments
                  </div>
                </div>
              )}
            </div>
            <div className="py-1 px-1 ">
              <div
                className="flex justify-between bg-gray-300 py-2 px-2 cursor-pointer"
                onClick={() => setToggleThree(handleToggleThree)}
              >
                <div>Module 3</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  style={{ transform: `rotate(${toggleTwo ? 180 : 0}deg)` }}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {toggleThree && (
                <div className="cursor-pointer text-xs from-neutral-600 ">
                  <div
                    className="bg-gray-50 py-3 px-2  hover:bg-gray-200 border-b border-gray-300"
                    onClick={handleFeedback}
                  >
                    Feedback
                  </div>
                  <div
                    className="bg-gray-50 py-3 px-2 hover:bg-gray-200"
                    onClick={handleCertificate}
                  >
                    Certificate
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className={screen ? "w-5/6" : "w-full"}
        style={{ minHeight: "100%" }}
      >
        <div className="flex py-2 px-2 bg-cyan-800">
          <div className="me-2" onClick={() => setScreen(!screen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 mt-0.5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div className="font-semibold text-white text-xl">{courseId}</div>
        </div>
        <div className="shadow-2xl h-full">
          {showHtmlPdf ? (
            <HtmlPdf />
          ) : showDocs ? (
            <Docs />
          ) : quiz ? (
            <QuizBanner />
          ) : showVideo ? (
            <HtmlVideo courseId={courseId} />
          ) : showFeedback ? (
            <FeedbackForm courseId={courseId} />
          ) : showAssignments ? (
            <HtmlAssignments courseId={courseId} />
          ) : showCertificate ? (
            <Certificate />
          ) : (
            <Welcome />
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
