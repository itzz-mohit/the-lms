import React, { useEffect, useState } from "react";
import MyLearningBanner from "../Banners/MyLearningBanner";
import CoursesCard from "../Cards/CoursesCard";
import { useSelector } from "react-redux";
import {
  getCompletedCoursesApi,
  getInProgressCoursesApi,
} from "../../services/course-api";

const MyLearning = () => {
  const userId = useSelector((state) => state.auth.userData?._id);
  const [coursesListProgress, setcoursesListProgress] = useState([]);
  const [coursesListCompleted, setcoursesListCompleted] = useState([]);
  const [validities, setValidities] = useState([]);
  const [progress, setprogress] = useState(0);
  const [completed, setcompleted] = useState(0);

  const fetchInProgressCourses = async () => {
    try {
      const response = await getInProgressCoursesApi(userId);
      //console.log(response);
      setcoursesListProgress(response.data);
      setValidities(response.validities);
      setprogress(response.count);
    } catch (error) {
      console.log("Error while getting in progress courses");
      console.error(error);
    }
  };

  const fetchCompletedCourses = async () => {
    try {
      const response = await getCompletedCoursesApi(userId);
      //console.log(response);
      setcoursesListCompleted(response.data);
      setcompleted(response.count);
    } catch (error) {
      console.log("Error while getting completed courses");
      console.error(error);
    }
  };
  useEffect(() => {
    if (userId) {
      fetchInProgressCourses();
      fetchCompletedCourses();
    }
  }, [userId]);

  const findValidity = (courseId) => {
    return validities.find(
      (v) => v.courseId.toString() === courseId.toString()
    );
  };
  return (
    <div className="bg-gray-50">
      <MyLearningBanner active={progress} done={completed} />
      <div className="text-2xl text-gray-700 mt-10">
        <h1 className="ms-6 font-semibold">In Progress Courses</h1>
      </div>
      {coursesListProgress.length > 0 ? (
        <div className="flex flex-wrap ms-5">
          {coursesListProgress.map((course, index) => {
            const validity = findValidity(course._id);
            return (
              <CoursesCard
                key={index}
                value={course}
                enrolledButton={false}
                validity={validity}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-50 ms-10 mt-7 pb-7 text-xl text-gray-600">
          No progress courses found.
        </div>
      )}
      <div className="text-2xl text-gray-700 mt-5">
        <h1 className="ms-6 font-semibold">Completed Courses</h1>
      </div>
      {coursesListCompleted.length > 0 ? (
        <div className="flex flex-wrap ms-5">
          {coursesListCompleted.map((course, index) => {
            const validity = findValidity(course._id);
            return (
              <CoursesCard
                key={index}
                value={course}
                enrolledButton={false}
                activeLink={false}
                validity={validity}
                courseCompleted={true}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-50 ms-10 mt-7 pb-7 text-xl text-gray-600">
          No completed courses found.
        </div>
      )}
    </div>
  );
};

export default MyLearning;
