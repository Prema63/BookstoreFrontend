import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Upload,
  Image,
  Save,
  Star,
  RotateCcw,
} from "lucide-react";

export default function AllBook() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [featuredData, setFeaturedData] = useState({
    image: null,
    bookType: "",
    author: "",
    rating: "",
    price: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedData({ ...featuredData, image: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setFeaturedData({ ...featuredData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Featured Data:", featuredData);
    alert("Featured book submitted successfully!");
  };

  const handleReset = () => {
    setFeaturedData({ 
      image: null, 
      bookType: "", 
      author: "", 
      rating: "", 
      price: "", 
      description: "" 
    });
    setImagePreview(null);
  };

  return (
    <div className="w-full max-w-6xl  mt-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          All Books Management
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{isExpanded ? "" : ""}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>

      {/* Collapsed State*/}    
      {!isExpanded && (
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-12 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Book"
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <Image className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Book type..."
                value={featuredData.bookType}
                onChange={(e) => handleInputChange("bookType", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Row1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Book Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="book-image"
                />
                <label
                  htmlFor="book-image"
                  className="block w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {imagePreview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={imagePreview}
                          alt="Book preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                          <Upload className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">
                          Click to upload book image
                        </span>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Book Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Book Type
              </label>
              <input
                type="text"
                placeholder="Enter book type (e.g., Fiction, Non-Fiction, Mystery)"
                value={featuredData.bookType}
                onChange={(e) => handleInputChange("bookType", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Author */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                type="text"
                placeholder="Enter author name"
                value={featuredData.author}
                onChange={(e) => handleInputChange("author", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="0.0"
                  value={featuredData.rating}
                  onChange={(e) => handleInputChange("rating", e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Star className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={featuredData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Book Description
              </label>
              <textarea
                placeholder="Enter book description"
                value={featuredData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-9">
              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors w-52 h-10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Form
              </button>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors w-52 h-10"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Featured Book
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}