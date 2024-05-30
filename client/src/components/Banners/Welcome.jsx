import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white text-slate-700 pb-52">
      <h1 className="text-3xl font-bold mt-28 pt-2 text-center">
        Hello, welcome here to learn something{" "}
        <span className="text-cyan-800">new everyday!!!</span>
      </h1>
      <div className="text-xl mt-6 text-center max-w-2xl space-y-4">
        <p>
          We are excited to have you on this journey of knowledge and growth.
        </p>
        {/* <p>
          Our platform offers a variety of courses and resources to help you
          expand your skills and achieve your learning goals.
        </p>
        <p>
          Whether you're looking to improve your coding skills, explore new
          technologies, or gain new insights, we have something for everyone.
        </p> */}
      </div>
     
    </div>
  );
};

export default Welcome;
