import React, { useState, useEffect } from "react";
import { coursesList } from "../../utils/course-data";
import Header from "../Header/Header";
import Banner from "../Banners/Banner";
import { SmallCard } from "../Cards/SmallCard";
import CoursesCard from "../Cards/CoursesCard";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState(coursesList);

  useEffect(() => {
    setFilteredCourses(courses);
  }, []);

  const handleSearch = (query) => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="mx-8">
      <Banner onSearch={handleSearch} />
      <div className="flex flex-wrap">
        <SmallCard />
        <SmallCard />
      </div>
      <div className="text-2xl text-gray-400 ms-4 mt-7">Active Courses</div>

      <div className="flex flex-wrap ">
        {filteredCourses.map((course, index) => (
          <CoursesCard key={index} value={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
