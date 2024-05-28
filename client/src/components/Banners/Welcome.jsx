import React from "react";

const Welcome = () => {
  return (
    <div
      className="flex justify-center  h-52 bg-white text-3xl  min-h-screen"
      style={{ minHeight: "100%" }}
    >
      <h1 className="text-2xl font-semibold mt-20 text-slate-700">
        Hello, welcome here to learn something{" "}
        <span className="text-teal-500">new everyday!!!</span>
      </h1>
    </div>
  );
};

export default Welcome;
