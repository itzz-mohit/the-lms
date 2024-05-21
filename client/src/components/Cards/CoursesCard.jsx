import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourseRating from "../RatingBar/CourseRating";
import { favoriteCourse } from "../../services/course-api";
import axios from "axios";
import { useSelector } from "react-redux";

const CoursesCards = ({ value, enrolledButton = true, activeLink = true }) => {
  const [isFilled, setIsFilled] = useState(value.favorite);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const navigate = useNavigate();
  const courseId = value._id;
  const totalRating = Number(value.rating);
  const { userData } = useSelector((state) => state.auth);
  // console.log(userData._id);
  const userId = userData._id;

  const handleSvgClick = async () => {
    try {
      const response = await favoriteCourse(courseId);
      setIsFilled(response.data.favorite);
    } catch (error) {
      console.log("Error while adding to favorite");
      console.error(error);
    }
  };

  const handleEnrollClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/payment",
        {
          userId: userId,
          courseId: courseId,
          amount: 100,
          currency: "INR",
          keyId: "rzp_test_YgUY0iSX1ggQSC",
          keySecret: "iFtjontGbLgQH9glnQGEl2oU",
        }
      );

      // console.log(response);
      // Redirect to Razorpay payment page
      const { order_id, currency, amount } = response.data;
      const options = {
        key: "rzp_test_YgUY0iSX1ggQSC",
        amount: amount,
        currency: currency,
        name: value.title,
        description: value.description,
        order_id: order_id,
        handler: async function (response) {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/v1/payment/confirm",
              { userId: userId, courseId: courseId, orderId: order_id }
            );
            // console.log(response);
            if (response.data.success) {
              alert("Payment successful");
              navigate("/");
            }
          } catch (error) {
            console.log("Error while saving payment data");
            console.error(error);
          }
        },
        prefill: {
          name: "YOUR_NAME",
          email: "YOUR_EMAIL",
          contact: "YOUR_PHONE",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("Error while initiating payment");
      console.error(error);
    }
  };

  return (
    <div className="w-full md:w-[330px] h-[380px] rounded-md border my-7 mx-4 relative overflow-hidden bg-white shadow-lg">
      {!activeLink ? (
        <Link to={"/"}>
          <img
            src={value.image}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
        </Link>
      ) : (
        <Link to={"/content?id=" + value._id}>
          <img
            src={value.image}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
        </Link>
      )}
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
          {value.description}
        </p>
        <div className="flex items-center mt-3">
          <CourseRating intialrating={totalRating} courseId={value._id} />
        </div>
      </div>

      {enrolledButton && (
        <button
          type="button"
          className="absolute bottom-2 left-4 rounded-md bg-black px-2.5 py-1 text-[13px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleEnrollClick}
        >
          Enroll
        </button>
      )}
    </div>
  );
};

export default CoursesCards;
