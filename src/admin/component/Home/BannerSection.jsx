import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Upload,
  Image,
  Save,
  RotateCcw
} from "lucide-react";

export default function AdminBannerSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bannerData, setBannerData] = useState({
    image: null,
    heading: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerData({ ...bannerData, image: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setBannerData({ ...bannerData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Banner Data:", bannerData);
    alert("Banner submitted successfully!");
  };

  const handleReset = () => {
    setBannerData({ image: null, heading: "", description: "" });
    setImagePreview(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          Banner Management
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
                    alt="Banner"
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
                placeholder="Banner heading..."
                value={bannerData.heading}
                onChange={(e) => handleInputChange("heading", e.target.value)}
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
                Banner Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="banner-image"
                />
                <label
                  htmlFor="banner-image"
                  className="block w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {imagePreview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={imagePreview}
                          alt="Banner preview"
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
                          Click to upload image
                        </span>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Banner Heading
              </label>
              <input
                type="text"
                placeholder="Enter banner heading"
                value={bannerData.heading}
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
                Banner Description
              </label>
              <textarea
                placeholder="Enter banner description"
                value={bannerData.description}
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
                Save Banner
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
