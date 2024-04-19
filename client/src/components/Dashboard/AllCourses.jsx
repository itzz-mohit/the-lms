import React from "react";
import { coursesList } from "../../utils/course-data";
import CoursesCards from "../Cards/CoursesCard";

const AllCourses = () => {
  return (
    <div className="mt-28 mx-8 pb-5">
      <div className="text-3xl text-gray-400 ms-4 mt-7 py-5">All Courses</div>
      <div className="flex flex-wrap">
        {coursesList.map((course, index) => (
          <CoursesCards value={course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
