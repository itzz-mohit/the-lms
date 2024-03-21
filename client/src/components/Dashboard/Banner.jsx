import React, { useState } from "react";

const Banner = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchButtonClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="py-8 px-4 mt-24">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold text-gray-800">Dashboard</div>
          <div className="ml-4 relative">
            <input
              className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={handleSearchButtonClick}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="text-2xl font-semibold text-gray-800 mt-4">
          Explore our Courses
        </div>
      </div>
    </div>
  );
};

export default Banner;
