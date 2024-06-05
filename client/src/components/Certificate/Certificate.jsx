import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { getCompletedCoursesApi } from "../../services/course-api";
import { useSelector } from "react-redux";

const Certificate = () => {
  const certificateRef = useRef();
  const userId = useSelector((state) => state.auth.userData?._id);
  const [count, setcount] = useState(0);

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  const handleDownloadCertificate = () => {
    const input = certificateRef.current;

    const logoSrc =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqneHCKOqUKroqKPj0Hfthu1uWYu-v8BCRhA&s";

    Promise.all([preloadImage(logoSrc)])
      .then(() => {
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("landscape");
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("certificate.pdf");
          })
          .catch((error) =>
            console.error("Error generating certificate:", error)
          );
      })
      .catch((error) => console.error("Error loading images:", error));
  };

  const fetchCompletedCourses = async () => {
    try {
      const response = await getCompletedCoursesApi(userId);
      console.log(response.count);
      setcount(response.count);
    } catch (error) {
      console.log("Error while getting completed courses");
      console.error(error);
    }
  };
  //console.log("count is" + count)
  useEffect(() => {
    if (userId) {
      fetchCompletedCourses();
    }
  }, [userId]);

  return (
    <>
      {count > 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100">
          <div
            ref={certificateRef}
            className="bg-white p-12 rounded-lg shadow-lg text-center w-full max-w-4xl border-8 border-cyan-900 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-cyan-900 to-cyan-800"></div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-cyan-900 to-cyan-800"></div>

            <button
              onClick={handleDownloadCertificate}
              className="absolute top-8 right-4 p-2 bg-gray-500 text-white rounded-full shadow hover:bg-gray-400 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>

            <div className="mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqneHCKOqUKroqKPj0Hfthu1uWYu-v8BCRhA&s"
                alt="Logo"
                className="mx-auto w-28 h-32"
              />
            </div>

            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              🎉 Certificate of Completion 🎉
            </h1>
            <p className="text-2xl text-gray-700 mb-6 italic">
              This certifies that
            </p>
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Mohit
            </h2>
            <p className="text-2xl text-gray-700 mb-6 italic">
              has successfully completed the course
            </p>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              Html Certification
            </h3>
            <p className="text-xl text-gray-600 mt-4">
              Congratulations on your achievement! ❤️
            </p>

            <div className="absolute bottom-8 right-4">
              <div className="text-md text-gray-500">
                Date: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-white shadow-xl py-48 ">
          <h1 className="text-3xl text-gray-700 flex items-center justify-center">
            Complete the course firstly!!
          </h1>
        </div>
      )}
    </>
  );
};

export default Certificate;
