import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="min-h-[50vh] bg-gradient-to-br from-blue-900 via-blue-800 to-slate-400 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Section */}
            <div className="text-white space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                Welcome to GloomShine
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Book Store
                </span>
              </h1>

              <p className="text-md sm:text-xl lg:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Discover your next favorite book from our carefully curated
                collection of Love, Knowledge, and History books.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-4">
                <Link to="/popular">
                  <button className="bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Browse Popular Books
                  </button>
                </Link>

                <Link to="/about">
                  <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative order-first lg:order-last">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.yukio.in/blog/wp-content/uploads/2025/07/Book-Store.jpg"
                  alt="Bookstore with warm lighting"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover p-6 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
