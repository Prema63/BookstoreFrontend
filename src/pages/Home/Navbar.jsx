import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800 lg:text-xl md:text-lg sm:text-base">
              Gloomshine Book Store
            </span>
          </div>

          {/* Desktop & Large Tablet Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/popular" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Popular
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact Us
            </a>
          </div>

          {/* Tablet Navigation Links (condensed) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Popular
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors">
              About Us
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search books..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Cart Icon */}
            <div className="relative">
              <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Tablet Search Bar (smaller) */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Cart Icon */}
            <div className="relative">
              <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button and icons */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Mobile Cart Icon */}
            <div className="relative">
              <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
            
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Tablet Hamburger Menu (for additional options) */}
          <div className="hidden md:flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-800 transition-colors ml-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Popular
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Contact Us
              </a>
              
              {/* Mobile Search Bar */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="hidden md:block lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </a>
             
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;