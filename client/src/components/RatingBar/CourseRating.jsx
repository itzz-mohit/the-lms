import React, { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { updateCourseRating } from "../../services/course-api";

function CourseRating({ intialrating, courseId }) {
  const [rating, setRating] = useState(intialrating);

  const handleRatingChange = async (data) => {
    try {
      const response = await updateCourseRating(courseId, { rating: data });
      console.log(response);
      setRating(data);
    } catch (error) {
      console.log(error);
      console.log("Failed to change the rating");
    }
  };

  return (
    <div className="flex p-0 m-0">
      <Rating
        style={{ maxWidth: "100px" }}
        value={rating}
        onChange={handleRatingChange}
        className="text-orange-600 text-sm"
      />
      <span className="text-gray-600 text-sm m-2">
        {rating === 0 ? "No rating" : `${rating} out of 5 stars`}
      </span>
    </div>
  );
}

export default CourseRating;
