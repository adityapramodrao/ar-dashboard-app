import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">

        <h1 className="text-center text-2xl font-semibold mb-6">
          Create Account
        </h1>

        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Mobile with Country Code + Flag */}
        <div className="mt-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-300">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="flag"
                className="w-5 h-4"
              />
              <span className="text-gray-700 font-medium">+91</span>
            </div>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full py-3 px-4 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="mt-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none pr-12 focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mt-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none pr-12 focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Submit */}
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg mt-6 transition">
          Create Account
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-5">
          go back to login {" "}
          <Link to="/login" className="text-purple-500 underline cursor-pointer">login page</Link>{" "}
        </p>
      </div>
    </div>
  );
}
