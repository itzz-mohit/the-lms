import React from "react";

export function SmallCard() {
  return (
    <div className="card p-0 ms-4 w-72 grid grid-cols-2 ">
      <img
        src="https://lms.kochiva.com/assets/images/LMS.png"
        className="card-img-top w-full h-auto rounded-s-lg"
        alt="..."
      />
      <div className="card-body flex items-center justify-center border-e-2 border-y-2 rounded-e-lg">
        <p className="card-text font-bold">IT Courses</p>
      </div>
    </div>
  );
}
