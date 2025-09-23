import React from "react";
import { Heart, Brain, BookOpen } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      id: "love",
      title: "Love",
      description: "Romance novels and love stories",
      icon: Heart,
      buttonText: "Explore Love Books",
      iconColor: "text-pink-500",
      hoverColor: "hover:text-pink-600",
    },
    {
      id: "knowledge",
      title: "Knowledge",
      description: "Educational and self-help books",
      icon: Brain,
      buttonText: "Explore Knowledge Books",
      iconColor: "text-pink-400",
      hoverColor: "hover:text-pink-500",
    },
    {
      id: "history",
      title: "History",
      description: "Historical accounts and biographies",
      icon: BookOpen,
      buttonText: "Explore History Books",
      iconColor: "text-blue-500",
      hoverColor: "hover:text-blue-600",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex items-center justify-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <h2 className="text-blue-800 cursor-pointer flex items-center">
            <Link to="/popular" className="flex items-center">
              Explore more
              <FaArrowRightLong className="ml-2" />
            </Link>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center group hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                    <IconComponent
                      className={`w-8 h-8 ${category.iconColor} ${category.hoverColor} transition-colors duration-300`}
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Button */}
                <button className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2">
                  {category.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
