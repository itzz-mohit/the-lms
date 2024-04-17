import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Banner from "../Banners/Banner";
import { SmallCard } from "../Cards/SmallCard";
import CoursesCard from "../Cards/CoursesCard";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const coursesList = [
    {
      id: 1,
      title: "Basics of Web Development",
      subtitle: "Basics Introduction to HTML & CSS",
    },
    {
      id: 2,
      title: "Mastering HTML5 Markup",
      subtitle: "Advanced Techniques for Modern Web Development",
    },
    {
      id: 3,
      title: "CSS Styling Essentials",
      subtitle: "Fundamental Principles and Best Practices",
    },
    {
      id: 4,
      title: "Responsive Web Designing",
      subtitle: "Optimizing Layouts for All Devices with CSS3",
    },
    {
      id: 5,
      title: "JavaScript Essentials",
      subtitle: "Building Interactivity and Dynamic Content",
    },
    {
      id: 6,
      title: "Advanced JavaScript Techniques",
      subtitle: "Harnessing the Power of ES6 and Beyond",
    },
    {
      id: 7,
      title: "Frontend Development Bootcamp",
      subtitle: "Mastering HTML, CSS, and JavaScript",
    },
    {
      id: 8,
      title: "CSS Grid Layout Mastery",
      subtitle: "Unlocking the Potential of Grid-based Designs",
    },
    {
      id: 9,
      title: "Modern JavaScript Frameworks",
      subtitle: "Exploring React, Angular, and Vue for Dynamic Web Applications",
    },
    {
      id: 10,
      title: "Semantic HTML5 Structure",
      subtitle: "Creating Meaningful Markup for Enhanced Accessibility and SEO",
    },
    {
      id: 11,
      title: "Advanced CSS Animations",
      subtitle: "Crafting Engaging Visual Experiences with CSS3 Transitions and Keyframes",
    },
    {
      id: 12,
      title: "Data Structures and Algorithms",
      subtitle: "Optimizing Code Efficiency for Scalable Applications",
    },
    {
      id: 13,
      title: "Web Performance Optimization",
      subtitle: "Improving Speed and Efficiency Through HTML, CSS, and JavaScript Techniques",
    },
    {
      id: 14,
      title: "CSS Flexbox Fundamentals",
      subtitle: "Building Flexible and Responsive Layouts with Flexbox",
    },
    {
      id: 15,
      title: "JavaScript Design Patterns",
      subtitle: "Architecting Maintainable and Scalable Codebases for Web Projects",
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
