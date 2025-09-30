import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Save,
  RotateCcw
} from "lucide-react";

export default function ContactSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contactData, setContactData] = useState({
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setContactData({ ...contactData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Contact Data:", contactData);
    alert("Contact information submitted successfully!");
  };

  const handleReset = () => {
    setContactData({ address: "", phone: "", email: "", description: "" });
  };

  return (
    <div className="w-full max-w-6xl mt-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          Contact Section Management
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

      {/* Collapsed Service*/}    
      {!isExpanded && (
        <div className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Contact address..."
                value={contactData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors w-full sm:w-auto"
            >
              Edit
            </button>
          </div>
        </div>
      )}


      {/* Expanded service */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                placeholder="Enter Address"
                value={contactData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={contactData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={contactData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Enter Description"
                value={contactData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
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
                Save Contact
              </button>

          </div>

        </div>
      )}
    </div>
  );
}