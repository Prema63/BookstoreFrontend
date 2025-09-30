import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen  relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-4">
              Contact Us
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions about a book, your order, or just want to say
              hello? Our team at GloomShine Book Store is here to help. Reach
              out to us anytime—we’d love to hear from you and guide you to your
              next great read.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8 lg:space-y-12">
              {/* Address */}
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                    Sector 63 pocket C-87,
                    <br />
                    Noida, UttarPradesh,
                    <br />
                    201301
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-500 text-base sm:text-lg">
                  +91 xxxxxxxx79
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-500 text-base sm:text-lg">
                    gloomshinebookstore@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="shadow-2lg  rounded-2xl p-6 sm:p-8 lg:p-10 border border-white border-opacity-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-3 uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-400 bg-transparent focus:border-blue-800 focus:outline-none focus:ring-0 text- placegray-500 holder-gray-400 transition-colors duration-300 text-base sm:text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-3 uppercase"                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-400 bg-transparent focus:border-blue-800 focus:outline-none focus:ring-0 text-gray-500 placeholder-gray-400 transition-colors duration-300 text-base sm:text-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600 mb-3  uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-400 bg-transparent focus:border-blue-800 focus:outline-none focus:ring-0 text-gray-500 placeholder-gray-400 resize-none transition-colors duration-300 text-base sm:text-lg"
                    placeholder="Type your message..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blu6-900 text-white px-8 py-4 sm:py-5 text-base sm:text-lg font-medium rounded-xl transition-all duration-300 transform"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
