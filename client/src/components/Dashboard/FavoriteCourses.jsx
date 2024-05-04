import React, { useState, useEffect } from "react";
import CoursesCards from "../Cards/CoursesCard";
import { getFavoriteCourses } from "../../services/course-api";

const FavoriteCourses = () => {
  const [favoriteCourse, setFavoriteCourse] = useState([]);

  const fetchFavoriteCourses = async () => {
    try {
      const response = await getFavoriteCourses();
      console.log(response);
      console.log(response.data);
      setFavoriteCourse(response.data);
    } catch (error) {
      console.log("Error while fetching favorite courses");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFavoriteCourses();
  }, []);

  return (
    <div className="mt-28">
      <div className="text-3xl text-gray-600 mt-10">
        <h1 className="ms-6 ">Favorite Courses</h1>
      </div>
      <div className="flex flex-wrap ms-5">
        {favoriteCourse.map((course, index) => (
          <CoursesCards key={index} value={course} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;
