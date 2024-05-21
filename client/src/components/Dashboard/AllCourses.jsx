import React, { useEffect, useState } from "react";
import CoursesCards from "../Cards/CoursesCard";
import { courseCardApi } from "../../services/course-api";

const AllCourses = () => {
  const [coursesList, setCoursesList] = useState([]);

  const fetchAllCards = async () => {
    try {
      const response = await courseCardApi();
      setCoursesList(response.data);
    } catch (error) {
      console.log("Error while getting all the courses");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllCards();
  }, []);
  return (
    <div className="mt-28 mx-8 pb-5">
      <div className="text-3xl text-gray-400 ms-4 mt-7 py-5">All Courses</div>
      <div className="flex flex-wrap">
        {coursesList.map((course, index) => (
          <CoursesCards value={course} key={index} activeLink={false} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
