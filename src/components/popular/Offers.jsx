import React from "react";
// import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <div
      className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1600&h=900&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center lg:text-left text-white max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          📚 Big Book Sale!
          <span className="block mt-2 text-white">
            Up to 50% Off Bestsellers
          </span>
        </h1>

        <p className="text-lg sm:text-xl mb-6">
          Discover your next favorite read – from timeless classics to new
          releases.  
          <span className="block mt-2 text-blue-300 font-semibold">
            Hurry! Limited time offer.
          </span>
        </p>

        {/* <Link to="/popular">
          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold transition-colors text-black">
            Shop Now
          </button>
        </Link> */}
      </div>
    </div>
  );
}
