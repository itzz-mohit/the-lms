import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const FeedbackForm = ({ courseId }) => {
  const { userData } = useSelector((state) => state.auth);
  const username = userData.username;
  const userId = userData._id;
  const [message, setMessage] = useState("");
  const [feedbackDone, setFeedbackDone] = useState(false);
  // console.log(userId);
  // console.log(courseId);

  useEffect(() => {
    getInitialValidities(userId, courseId);
  }, []);

  const getInitialValidities = async (userId, courseId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/validity/${userId}?courseId=${courseId}`
      );

      //console.log(response);

      if (response.data.success) {
        setFeedbackDone(response.data.data.feedback);
      }
    } catch (error) {
      console.log("Error while getting the initial validities");
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/feedback/${userId}`,
        {
          username,
          message,
        }
      );

      //console.log(response);
      if (response.data.success) {
        // console.log(userId);
        // console.log(courseId);

        const response = await axios.put(
          `http://localhost:5000/api/v1/validity/${userId}`,
          { courseId, feedback: false }
        );

        //console.log(response);
        if (response.data.success) {
          setFeedbackDone(response.data.data.feedback);
        }
      }
    } catch (error) {
      console.log("Error while giving feedback");
      console.error(error);
    }
  };

  return (
    <div>
      {feedbackDone ? (
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
            Feedback 🙂
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            If you had any issues or you liked our course, please share with us!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={username}
                readOnly
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button
              className="rounded border-0 bg-cyan-900 py-2 px-6 text-lg text-white hover:bg-cyan-900 focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            Feel free to connect with us on social media platforms.
          </p>
        </div>
      ) : (
        <div className="flex justify-center mt-40 h-screen bg-white shadow-xl">
          <h1 className="mt-3 text-2xl text-gray-500">
            Thank You, for giving feedback!!
          </h1>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
