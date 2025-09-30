import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Upload,
  Image,
  Save,
  RotateCcw,
  X
} from "lucide-react";



export default function AdminBannerSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bannerData, setBannerData] = useState({
    images: [],
    heading: "",
    buttonText1: "",
    buttonText2: "",
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setBannerData({ ...bannerData, images: [...bannerData.images, ...files] });
      
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreviews(prev => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index) => {
    const newImages = bannerData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setBannerData({ ...bannerData, images: newImages });
    setImagePreviews(newPreviews);
  };

  const handleInputChange = (field, value) => {
    setBannerData({ ...bannerData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Banner Data:", bannerData);
    alert("Banner submitted successfully!");
  };

  const handleReset = () => {
    setBannerData({ images: [], heading: "", buttonText1: "", buttonText2: "" });
    setImagePreviews([]);
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
                {imagePreviews.length > 0 ? (
                  <div className="relative w-full h-full">
                    <img
                      src={imagePreviews[0]}
                      alt="Banner"
                      className="w-full h-full object-cover rounded"
                    />
                    {imagePreviews.length > 1 && (
                      <div className="absolute top-0 right-0 bg-blue-800 text-white text-xs px-1 rounded-bl">
                        +{imagePreviews.length - 1}
                      </div>
                    )}
                  </div>
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
                Banner Images
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="banner-image"
                />
                <label
                  htmlFor="banner-image"
                  className="block w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {imagePreviews.length > 0 ? (
                      <div className="relative w-full h-full p-2">
                        <div className="grid grid-cols-3 gap-2 h-full overflow-auto">
                          {imagePreviews?.map((preview, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={preview}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-20 object-cover rounded"
                              />
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeImage(index);
                                }}
                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 transition-opacity"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="absolute  bg-opacity-30 flex items-center justify-center transition-opacity rounded-lg">
                          <Upload className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">
                          Click to upload images
                        </span>
                      </>
                    )}
                  </div>
                </label>
              </div>
              {imagePreviews.length > 0 && (
                <p className="text-xs text-gray-500">
                  {imagePreviews.length} image{imagePreviews.length > 1 ? 's' : ''} selected
                </p>
              )}
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
            {/* Button Texts */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Button Text
                </label>
                <input
                  type="text"
                  placeholder="Enter first button text"
                  value={bannerData.buttonText1}
                  onChange={(e) =>
                    handleInputChange("buttonText1", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Second Button Text
                </label>
                <input
                  type="text"
                  placeholder="Enter second button text"
                  value={bannerData.buttonText2}
                  onChange={(e) =>
                    handleInputChange("buttonText2", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
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