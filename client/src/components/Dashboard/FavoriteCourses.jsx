import React from "react";
import CoursesCards from "../Cards/CoursesCard";

const FavoriteCourses = () => {
  const coursesList = [
    {
      id: 1,
      title: "Basics of Web Development",
      subtitle: "Basics Introduction to HTML & CSS",
    },

    {
      id: 2,
      title: "JavaScript Essentials",
      subtitle: "Building Interactivity and Dynamic Content",
    },
  ];
  return (
    <div className="mt-28">
      <div className="text-3xl text-gray-600 mt-10">
        <h1 className="ms-6 ">Favorite Courses</h1>
      </div>
      <div className="flex flex-wrap ms-5">
        {coursesList.map((course, index) => (
          <CoursesCards key={index} value={course} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;
