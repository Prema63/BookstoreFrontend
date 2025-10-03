import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Upload,
  Image,
  Video,
  Save,
  RotateCcw,
  Type,
} from "lucide-react";

export default function OfferSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [offerData, setOfferData] = useState({
    backgroundType: "image",
    backgroundFile: null,
    mainHeading: "",
    subHeading: "",
    buttonText: "",
  });
  const [backgroundPreview, setBackgroundPreview] = useState(null);

  const handleBackgroundUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOfferData({ ...offerData, backgroundFile: file });
      const reader = new FileReader();
      reader.onload = (e) => setBackgroundPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setOfferData({ ...offerData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Offer Data:", offerData);
    alert("Offer section saved successfully!");
  };

  const handleReset = () => {
    setOfferData({
      backgroundType: "image",
      backgroundFile: null,
      mainHeading: "",
      subHeading: "",
      buttonText: "",
    });
    setBackgroundPreview(null);
  };

  return (
    <div className="w-full max-w-6xl mt-9 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          Offer Management Section
        </h2>
        <div className="flex items-center space-x-2">
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
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                {backgroundPreview ? (
                  offerData.backgroundType === "video" ? (
                    <video
                      src={backgroundPreview}
                      className="w-full h-full object-cover rounded"
                      muted
                    />
                  ) : (
                    <img
                      src={backgroundPreview}
                      alt="Background"
                      className="w-full h-full object-cover rounded"
                    />
                  )
                ) : (
                  <Image className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Main heading..."
                value={offerData.mainHeading}
                onChange={(e) => handleInputChange("mainHeading", e.target.value)}
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
          {/* Row 1  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Background Type Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Background Type
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="backgroundType"
                    value="image"
                    checked={offerData.backgroundType === "image"}
                    onChange={(e) => {
                      handleInputChange("backgroundType", e.target.value);
                      setBackgroundPreview(null);
                      setOfferData({ ...offerData, backgroundType: e.target.value, backgroundFile: null });
                    }}
                    className="w-4 h-4 text-blue-600"
                  />
                  <Image className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Image</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="backgroundType"
                    value="video"
                    checked={offerData.backgroundType === "video"}
                    onChange={(e) => {
                      handleInputChange("backgroundType", e.target.value);
                      setBackgroundPreview(null);
                      setOfferData({ ...offerData, backgroundType: e.target.value, backgroundFile: null });
                    }}
                    className="w-4 h-4 text-blue-600"
                  />
                  <Video className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Video</span>
                </label>
              </div>
            </div>

            {/* Background Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Background {offerData.backgroundType === "video" ? "Video" : "Image"}
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept={offerData.backgroundType === "video" ? "video/*" : "image/*"}
                  onChange={handleBackgroundUpload}
                  className="hidden"
                  id="background-file"
                />
                <label
                  htmlFor="background-file"
                  className="block w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {backgroundPreview ? (
                      <div className="relative w-full h-full">
                        {offerData.backgroundType === "video" ? (
                          <video
                            src={backgroundPreview}
                            className="w-full h-full object-cover rounded-lg"
                            muted
                            loop
                            autoPlay
                          />
                        ) : (
                          <img
                            src={backgroundPreview}
                            alt="Background preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                          <Upload className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    ) : (
                      <>
                        {offerData.backgroundType === "video" ? (
                          <Video className="w-8 h-8 text-gray-400 mb-2" />
                        ) : (
                          <Image className="w-8 h-8 text-gray-400 mb-2" />
                        )}
                        <span className="text-sm text-gray-500">
                          Click to upload {offerData.backgroundType}
                        </span>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-6">
            {/* Main Heading */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Main Heading
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter main heading (e.g., 'Mega Sale')"
                  value={offerData.mainHeading}
                  onChange={(e) => handleInputChange("mainHeading", e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Type className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Sub Heading */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Sub Heading
              </label>
              <input
                type="text"
                placeholder="Enter sub heading (e.g., 'Flat 50% OFF on all items')"
                value={offerData.subHeading}
                onChange={(e) => handleInputChange("subHeading", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Button Text */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Button Text
              </label>
              <input
                type="text"
                placeholder="Enter button text (e.g., 'Grab Now', 'Explore More')"
                value={offerData.buttonText}
                onChange={(e) => handleInputChange("buttonText", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 3 - Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors px-6 h-10"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Form
            </button>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors px-6 h-10"
            >
              <Save className="w-5 h-5 mr-2" />
              Save Offer
            </button>
          </div>

          {/* Preview Section */}
          {(offerData.mainHeading || offerData.subHeading || offerData.buttonText || backgroundPreview) && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Preview</h3>
              <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
                {backgroundPreview && (
                  offerData.backgroundType === "video" ? (
                    <video
                      src={backgroundPreview}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                    />
                  ) : (
                    <img
                      src={backgroundPreview}
                      alt="Background"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
                  {offerData.mainHeading && (
                    <h1 className="text-4xl font-bold mb-2">{offerData.mainHeading}</h1>
                  )}
                  {offerData.subHeading && (
                    <p className="text-xl mb-4">{offerData.subHeading}</p>
                  )}
                  {offerData.buttonText && (
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                      {offerData.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
