import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [fullName, setFullName] = useState("Mohit Kumar");
  const [username, setUsername] = useState("itzz-mohit");
  const [email, setEmail] = useState("mohitbite@gmail.com");
  const navigate = useNavigate();
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBack = () => {
    navigate("/userprofile");
  };

  const handleSave = () => {
    navigate("/userprofile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-10">
      <div className="bg-white max-w-2xl w-full sm:rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Hey! 👋 Mohit
        </h3>
        <p className="text-sm text-gray-700 mb-6">
          Here are your details and information:
        </p>
        <dl className="divide-y divide-gray-200">
          <div className="py-4">
            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
            <input
              className="input-field"
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="py-4">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <input
              className="input-field"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="py-4">
            <dt className="text-sm font-medium text-gray-500">Email Address</dt>
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </dl>
      </div>
      <div className="mt-6">
        <button
          className="rounded border-0 bg-cyan-900 py-2 px-6 text-lg text-white hover:bg-cyan-900 focus:outline-none mx-5"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="rounded border-0 bg-cyan-900 py-2 px-6 text-lg text-white hover:bg-cyan-900 focus:outline-none"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
