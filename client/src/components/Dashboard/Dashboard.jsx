import React, { useState, useEffect } from "react";
import Banner from "../Banners/Banner";
import { SmallCard } from "../Cards/SmallCard";
import CoursesCard from "../Cards/CoursesCard";
import { getUserDashboardCoursesApi } from "../../services/course-api";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [validities, setValidities] = useState([]);
  const userId = useSelector((state) => state.auth.userData?._id);

  const fetchUserCourses = async (userId) => {
    const response = await getUserDashboardCoursesApi(userId);
    // console.log(response);
    setValidities(response.validities);
    setCourses(response.data);
    setFilteredCourses(response.data);
  };

  useEffect(() => {
    fetchUserCourses(userId);
  }, []);

  const handleSearch = (query) => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const findValidity = (courseId) => {
    return validities.find(
      (v) => v.courseId.toString() === courseId.toString()
    );
  };

  return (
    <div className="mx-8">
      <Banner onSearch={handleSearch} />
      <div className="flex flex-wrap">
        <SmallCard name={"Other Courses"} show={false} />
        <SmallCard name={"IT Courses"} />
      </div>
      <div className="text-2xl text-gray-400 ms-4 mt-7">Active Courses</div>

      <div className="flex flex-wrap">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => {
            const validity = findValidity(course._id);
            return (
              <CoursesCard
                key={index}
                value={course}
                enrolledButton={false}
                validity={validity}
              />
            );
          })
        ) : (
          <div className="h-50 ms-4 mt-7 text-xl text-gray-600">
            No active courses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
