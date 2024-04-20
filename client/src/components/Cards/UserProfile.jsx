import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleUpdate = () =>{
    navigate('/updateprofile')
  }
  return (
    <div className=" flex flex-col items-center h-screen justify-center mt-5 bg-gray-50">
      <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg w-1/2">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Hey!! 👋 Mohit
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Your details and informations.
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Mohit Kumar
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Username</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                itzz-mohit
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                mohitbite@gmail.com
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Courses</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Basics of Web Development
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-5">
        <button
          class="rounded border-0 bg-cyan-900 py-2 px-6 text-lg text-white hover:bg-cyan-900 focus:outline-none"
          onClick={handleUpdate}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
