import React from "react";
import { Link } from "react-router-dom";

export function SmallCard({ name, show = true }) {
  return (
    <>
      {!show && (
        <div className="card p-2 md:p-0 md:ms-4 w-full md:w-72 grid grid-cols-2 ">
          <img
            src="https://lms.kochiva.com/assets/images/LMS.png"
            className="w-full h-28 md:h-24 rounded-s-lg"
            alt="..."
          />
          <div className="card-body flex items-center justify-center border-e-2 border-y-2 rounded-e-lg p-2 md:p-4">
            <p className="card-text font-semibold text-gray-700 ">{name}</p>
          </div>
        </div>
      )}

      {show && (
        <Link to="/allcourses">
          <div className="card p-2 md:p-0 md:ms-4 w-full md:w-72 grid grid-cols-2 ">
            <img
              src="https://lms.kochiva.com/assets/images/LMS.png"
              className="w-full h-28 md:h-24 rounded-s-lg"
              alt="..."
            />
            <div className="card-body flex items-center justify-center border-e-2 border-y-2 rounded-e-lg p-2 md:p-4">
              <p className="card-text font-semibold text-gray-700 ">{name}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
