import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginApi } from "../../services/auth-api";
import { useForm } from "react-hook-form";
import { login } from "../../features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const onDataSubmit = async (data) => {
    if (isValid) {
      try {
        const response = await loginApi(data);
        //console.log(response.user);
        const userData = response.user;
        if (response.success) {
          dispatch(login({ userData: userData }));
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/");
          console.log("Login Successful");
          reset();
        }
      } catch (error) {
        console.log("Error while logging user");
        console.error(error);
        if (error == "email") {
          setEmailError("User does not exist.");
        } else {
          setPasswordError("Invalid password.");
        }
      }
    }
  };

  return (
    <section className="mt-14">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-4xl font-bold leading-tight text-black">
            Sign In
          </h2>

          <form className="mt-8" onSubmit={handleSubmit(onDataSubmit)}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    onFocus={() => setEmailError("")}
                    {...register("email", {
                      required: "Please enter your email.",
                    })}
                  ></input>
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email.message}
                    </p>
                  )}
                  {emailError && (
                    <p className="text-red-500 text-xs italic">{emailError}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onFocus={() => setPasswordError("")}
                    {...register("password", {
                      required: "Please enter your password.",
                      pattern: {
                        value: /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,10}$/,
                        message:
                          "Password must include an uppercase letter, a number, and a special character.",
                      },
                      maxLength: {
                        value: 10,
                        message: "Password must not exceed 10 characters.",
                      },
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long.",
                      },
                    })}
                  ></input>
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">
                      {errors.password.message}
                    </p>
                  )}
                  {passwordError && (
                    <p className="text-red-500 text-xs italic">
                      {passwordError}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-2  text-sm text-gray-600 ">
                Don't have an account?
                <Link to="/register">
                  <span className="font-semibold text-black transition-all duration-200 hover:underline ms-1 cursor-pointer">
                    Create a free account
                  </span>
                </Link>
              </p>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
