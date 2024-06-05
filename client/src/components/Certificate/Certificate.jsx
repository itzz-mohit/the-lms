import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Certificate = ({ userName, courseName }) => {
  const certificateRef = useRef();

  const handleDownloadCertificate = () => {
    const input = certificateRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape");
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("certificate.pdf");
      })
      .catch((error) => console.error("Error generating certificate:", error));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
        ref={certificateRef}
        className="bg-white p-12 rounded-lg shadow-lg text-center w-full max-w-4xl border-8 border-cyan-900 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-cyan-900 to-cyan-800"></div>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-cyan-900 to-cyan-800"></div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎉 Certificate of Completion 🎉
        </h1>
        <p className="text-2xl text-gray-700 mb-6 italic">
          This certifies that
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
          {userName}
        </h2>
        <p className="text-2xl text-gray-700 mb-6 italic">
          has successfully completed the course
        </p>
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">
          {courseName}
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
      <button
        onClick={handleDownloadCertificate}
        className="mt-6 px-6 py-3 bg-cyan-900 text-white rounded-full shadow hover:bg-cyan-800 transition duration-300"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
