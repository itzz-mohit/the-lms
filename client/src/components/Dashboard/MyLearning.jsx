import React from "react";
import MyLearningBanner from "../Banners/MyLearningBanner";
import CoursesCard from "../Cards/CoursesCard";

const MyLearning = () => {
  const coursesListProgress = [
    {
      id: 1,
      title: "Basics of Web Development",
      subtitle: "Basics Introduction to HTML & CSS",
    },
    {
      id: 2,
      title: "CSS Styling Essentials",
      subtitle: "Fundamental Principles nand Best Practices",
    },
  ];

  const coursesListCompleted = [
    {
      id: 1,
      title: "Frontend Development Bootcamp",
      subtitle: "Mastering HTML, CSS, and JavaScript",
    },
  ];

  return (
    <div className="bg-gray-50">
      <MyLearningBanner />
      <div className="text-2xl text-gray-700 mt-10">
        <h1 className="ms-6 font-semibold">In Progress Courses</h1>
      </div>
      <div className="flex flex-wrap ms-5">
        {coursesListProgress.map((course, index) => (
          <CoursesCard key={index} value={course} />
        ))}
      </div>
      <div className="text-2xl text-gray-700 mt-5">
        <h1 className="ms-6 font-semibold">Completed Courses</h1>
      </div>
      <div className="flex flex-wrap ms-5">
        {coursesListCompleted.map((course, index) => (
          <CoursesCard key={index} value={course} />
        ))}
      </div>
    </div>
  );
};

export default MyLearning;
