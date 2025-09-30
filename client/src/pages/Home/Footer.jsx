import React from "react";
import { HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              GloomShine Book Store
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted partner for Love, Knowledge, and History books.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Love & Romance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Knowledge & Learning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  History & Heritage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Science
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Book Club
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-800 text-sm transition-colors duration-200"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GloomShine Book Store. All rights
              reserved.
            </p>

            {/* Help Button */}
            <button className="mt-4 sm:mt-0 bg-blue-800 hover:bg-blue-900 text-white rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <HelpCircle size={20} />
              <span className="sr-only">Help</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
