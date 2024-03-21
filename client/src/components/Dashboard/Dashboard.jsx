import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Banner from "./Banner";
import { SmallCard } from "./SmallCard";
import CoursesCard from "./CoursesCard";

const Dashboard = () => {
  const coursesList = [
    {
      title: "Foundations of Web Development",
      subtitle: "Comprehensive Introduction to HTML & CSS",
    },
    {
      title: "Mastering HTML5 Markup",
      subtitle: "Advanced Techniques for Modern Web Development",
    },
    {
      title: "CSS Styling Essentials",
      subtitle: "Fundamental Principles and Best Practices",
    },
    {
      title: "Responsive Web Design Fundamentals",
      subtitle: "Optimizing Layouts for All Devices with CSS3",
    },
    {
      title: "JavaScript Essentials",
      subtitle: "Building Interactivity and Dynamic Content",
    },
    {
      title: "Advanced JavaScript Techniques",
      subtitle: "Harnessing the Power of ES6 and Beyond",
    },
    {
      title: "Frontend Development Bootcamp",
      subtitle: "Mastering HTML, CSS, and JavaScript for Professional Websites",
    },
    {
      title: "CSS Grid Layout Mastery",
      subtitle: "Unlocking the Potential of Grid-based Designs",
    },
    {
      title: "Modern JavaScript Frameworks",
      subtitle:
        "Exploring React, Angular, and Vue for Dynamic Web Applications",
    },
    {
      title: "Semantic HTML5 Structure",
      subtitle: "Creating Meaningful Markup for Enhanced Accessibility and SEO",
    },
    {
      title: "Advanced CSS Animations",
      subtitle:
        "Crafting Engaging Visual Experiences with CSS3 Transitions and Keyframes",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "Optimizing Code Efficiency for Scalable Applications",
    },
    {
      title: "Web Performance Optimization",
      subtitle:
        "Improving Speed and Efficiency Through HTML, CSS, and JavaScript Techniques",
    },
    {
      title: "CSS Flexbox Fundamentals",
      subtitle: "Building Flexible and Responsive Layouts with Flexbox",
    },
    {
      title: "JavaScript Design Patterns",
      subtitle:
        "Architecting Maintainable and Scalable Codebases for Web Projects",
    },
  ];
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
      <Header />
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
