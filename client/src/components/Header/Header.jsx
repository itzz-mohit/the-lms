import React, { useState, useEffect, useRef } from "react";
import info from "../../assets/info.png";
import lms from "../../assets/lms.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <img src={lms} className="h-12 md:h-14" />

          <div className="flex items-center space-x-4 md:order-2">
            <div className="flex items-center space-x-2">
              <img src={info} className="h-7 " />
            </div>

            <div className="flex items-center space-x-2">
              <p className="text-gray-600 ">
                mohitbite@gmail.com
              </p>
            </div>
            <div className="relative" ref={dropdownRef}>
              <div
                className="py-1 px-4 bg-sky-600 rounded-lg cursor-pointer"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300"
                  >
                    Username
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300"
                  >
                    My Learning
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300"
                  >
                    My Submissions
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300"
                  >
                    Favorite Courses
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
