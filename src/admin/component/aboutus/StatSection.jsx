import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Save,
  RotateCcw,
  BookOpen,
  Calendar,
  Users,
  Star
} from "lucide-react";

export default function AboutStatsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [statsData, setStatsData] = useState({
    bookStock: "",
    yearOfService: "",
    happyCustomers: "",
    eventsHosted: "",
  });

  const handleInputChange = (field, value) => {
    setStatsData({ ...statsData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Stats Data:", statsData);
    alert("Stats submitted successfully!");
  };

  const handleReset = () => {
    setStatsData({ 
      bookStock: "", 
      yearOfService: "", 
      happyCustomers: "", 
      eventsHosted: "" 
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          Stats Management
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Book stock count..."
                value={statsData.bookStock}
                onChange={(e) => handleInputChange("bookStock", e.target.value)}
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

      {/* Expanded State */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book Stock */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <BookOpen className="w-4 h-4 mr-2" />
                Book Stock
              </label>
              <input
                type="number"
                placeholder="Enter total book stock"
                value={statsData.bookStock}
                onChange={(e) => handleInputChange("bookStock", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Years of Service */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Calendar className="w-4 h-4 mr-2" />
                Years of Service
              </label>
              <input
                type="number"
                placeholder="Enter years of service"
                value={statsData.yearOfService}
                onChange={(e) => handleInputChange("yearOfService", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 2*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Happy Customers */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 mr-2" />
                Happy Customers
              </label>
              <input
                type="number"
                placeholder="Enter number of happy customers"
                value={statsData.happyCustomers}
                onChange={(e) => handleInputChange("happyCustomers", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Events Hosted */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Star className="w-4 h-4 mr-2" />
                Events Hosted
              </label>
              <input
                type="number"
                placeholder="Enter number of events hosted"
                value={statsData.eventsHosted}
                onChange={(e) => handleInputChange("eventsHosted", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
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
              Save Stats
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
}