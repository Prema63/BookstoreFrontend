import React, { useState } from "react";
import { ChevronDown, ChevronUp, Upload, Image, Save, RotateCcw } from "lucide-react";

export default function CategorySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [CategoryData, setCategoryData] = useState({
    image: null,
    heading: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryData({ ...CategoryData, image: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setCategoryData({ ...CategoryData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Category Data:", CategoryData);
    alert("Category submitted successfully!");
  };

  const handleReset = () => {
    setCategoryData({ image: null, heading: "", description: "" });
    setImagePreview(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Category Management
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {isExpanded ? "" : ""}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>

        {/* Collapsed State */}
        {!isExpanded && (
          <div className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              
              <div className="flex-1 w-full">
                <input
                  type="text"
                  placeholder="Category heading..."
                  value={CategoryData.heading}
                  onChange={(e) => handleInputChange("heading", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors whitespace-nowrap"
              >
                Edit
              </button>
            </div>
          </div>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <div className="p-6 space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category Heading
                </label>
                <input
                  type="text"
                  placeholder="Enter Category Main heading"
                  value={CategoryData.heading}
                  onChange={(e) => handleInputChange("heading", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category Heading
                </label>
                <input
                  type="text"
                  placeholder="Enter Category heading"
                  value={CategoryData.heading}
                  onChange={(e) => handleInputChange("heading", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category Description
                </label>
                <textarea
                  placeholder="Enter Category description"
                  value={CategoryData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-0 sm:mt-9">
                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-52 h-10"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Form
                </button>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors w-full sm:w-52 h-10"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Category
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
