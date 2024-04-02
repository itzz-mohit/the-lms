import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import clickSound from '../../assets/sounds/mouse-click.mp3';


const ContentBanner = () => {

  const [play] = useSound(clickSound, { volume: 3.0 });
  const [isOpen, setIsOpen] = useState(false);
 
  const [selectedOption, setSelectedOption] = useState('Beginner');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

 
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  return (
    <div className="flex justify-between items-center mx-8 mt-28">
      <div className="flex items-center">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">HTML and CSS Certifications</h1>
        </div>
        <div className="relative inline-block text-left ml-4">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-transparent"
              onClick={toggleDropdown}
            >
              {selectedOption}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-mr-1 ml-2 h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
              <div className="py-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
               
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 border-b border-gray-200"
                  role="menuitem"
                  onClick={() => handleSelectOption('Beginner')}
                >
                  Beginner
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 border-b border-gray-200"
                  role="menuitem"
                  onClick={() => handleSelectOption('Intermediate')}
                >
                  Intermediate
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 "
                  role="menuitem"
                  onClick={() => handleSelectOption('Advance')}
                >
                  Advance
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto">
        <div className="text-right flex">
          <div>
            <Link to="/mainpage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="w-6 h-8 me-1 pe-1 text-sky-600 font-bold"
                onClick={()=>play()}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </Link>
          </div>
          <div className="text-xl text-sky-600"> back</div>
        </div>
      </div>
    </div>
  );
};

export default ContentBanner;
