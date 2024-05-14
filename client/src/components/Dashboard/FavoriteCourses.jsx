import React, { useState, useEffect } from "react";
import CoursesCards from "../Cards/CoursesCard";
import { getFavoriteCourses, favoriteCourse } from "../../services/course-api";

const FavoriteCourses = () => {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const fetchFavoriteCourses = async () => {
    try {
      const response = await getFavoriteCourses();
      setFavoriteCourses(response.data);
    } catch (error) {
      console.log("Error while fetching favorite courses");
      console.error(error);
    }
  };

  const handleUnlike = async (courseId) => {
    try {
      const response = await favoriteCourse(courseId);
      if (response.success) {
        setFavoriteCourses((prevCourses) =>
          prevCourses.filter((course) => course._id !== courseId)
        );
      }
    } catch (error) {
      console.error("Error while unliking the course: ", error);
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
        {favoriteCourses.map((course, index) => (
          <CoursesCards key={index} value={course} onUnlike={handleUnlike} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;
