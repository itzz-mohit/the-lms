import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      
      <div class="sm:flex items-center max-w-screen-xl py-8 mt-12 mx-auto">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span> */}
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-blue-600">Our Website</span>
            </h2>
            <p class="text-gray-700 text-justify">
              Welcome to LMS, a pioneering Learning Management System dedicated
              to transforming the way students learn and grow. Founded in 2024,
              our mission is to empower educators and learners by providing a
              dynamic, intuitive, and comprehensive digital platform tailored to
              meet the diverse needs of the educational community. At our
              Website, we blend cutting-edge technology with educational best
              practices to foster engaging, effective, and accessible learning
              experiences. Whether you are looking to enhance your skills,
              advance your career, or enrich your understanding of a wide array
              of subjects, our website is here to support your journey towards
              achieving your learning goals.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
