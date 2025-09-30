import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router";

export default function AdminLogin() {
  const location = useLocation();
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isPassVisible, setIsPassVisible] = useState("");
  const navigate = useNavigate();

  const { email, username, password } = inputValue;

  function handleOnChange(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full h-screen flex items-center justify-center">
      {/* main section */}
      <div className="flex w-full h-full bg-white rounded-none shadow-md shadow-gray-400 overflow-hidden">
        {/* Left section */}
        <div className="hidden md:block w-1/2 h-full">
          <img
            src="https://imgs.search.brave.com/bblpIKlXcvrP-P7-0-23pm8N410wGNnYZSVQLLJ3lyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhLzQ3/L2JiLzJhNDdiYmQ2/OTExYmFiOTM3ZTkw/ZDkyMjk5OGJiNmIw/LmpwZw"
            alt="Books"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right section */}
        <div className="p-4 w-full md:w-1/2 h-full flex flex-col justify-center">
          <div className="text-blue_1 flex justify-center">
            <div className="w-[300px]">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-800 lg:text-2xl md:text-lg sm:text-base">
                  Gloomshine Book Store
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 sm:px-4 py-4"
          >
            {location.pathname.includes("/admin/login") ? (
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={handleOnChange}
                  className="p-2 outline-none border border-gray-300 focus:outline-none focus:ring-blue-800 focus:ring-2 rounded-md w-full"
                />
              </div>
            ) : (
              <div>
                <label htmlFor="username">Email or Username</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Email or Username"
                  value={email}
                  onChange={handleOnChange}
                  className="p-2 outline-none border border-gray-300 focus:outline-none focus:ring-blue-800 focus:ring-2 rounded-md w-full"
                />
              </div>
            )}

            <div>
              <label htmlFor="email">Password</label>
              <div className="relative flex">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleOnChange}
                  className="p-2 outline-none border border-gray-300 focus:outline-none focus:ring-blue-800 focus:ring-2 rounded-md flex-1"
                />
                <button
                  type="button"
                  onClick={() => setIsPassVisible((prev) => !prev)}
                  className="absolute p-2 right-2 top-2/4 -translate-y-2/4 bg-transparent border-0 text-gray-600"
                >
                  {isPassVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="p-2 rounded-md bg-blue-800 hover:bg-blue-900 border-0 text-white flex-grow"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
