import React, { useState } from "react";

const CoursesCards = ({ value }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSvgClick = () => {
    setIsFilled(!isFilled);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="w-[330px] h-[380px] rounded-md border my-7 mx-4 relative overflow-hidden">
      <img
        src="https://lms.kochiva.com/assets/images/LMS.png"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-5 rounded-full bg-white absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFilled ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6 absolute top-2 right-2 cursor-pointer"
          onClick={handleSvgClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>

      <div className="p-4">
        <h1 className="text-lg font-semibold">{value.title}</h1>
        <p
          className="mt-3 text-sm text-gray-600 overflow-hidden"
          style={{ maxHeight: "3rem" }}
        >
          {value.subtitle}
        </p>
        <div className="flex items-center mt-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index} 
              xmlns="http://www.w3.org/2000/svg"
              fill={index < rating ? "orange" : "none"} 
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="orange"
              className="w-5 h-5 cursor-pointer"
              onClick={() => handleStarClick(index)} 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
          <span className="text-gray-600 text-sm m-2">
            {rating === 0 ? "No rating" : `${rating} out of 5 stars`}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-2 left-4 rounded-md bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Enroll
      </button>
    </div>
  );
};

export default CoursesCards;
