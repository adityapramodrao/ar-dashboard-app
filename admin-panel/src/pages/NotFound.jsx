import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/404.png"; // path to your uploaded image

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      
      {/* Image */}
      <img
        src={NotFoundImg}
        alt="404 Not Found"
        className="w-96 h-auto mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        404 Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 mb-6 text-center">
        Whoops! That page doesn’t exist.
      </p>

      {/* Links */}
      <p className="text-gray-500 text-sm mb-4">
        Here are some helpful links instead:
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="text-purple-500 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/search"
          className="text-purple-500 hover:underline"
        >
          Search
        </Link>
        <Link
          to="/help"
          className="text-purple-500 hover:underline"
        >
          Help
        </Link>
        <Link
          to="/contact"
          className="text-purple-500 hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
