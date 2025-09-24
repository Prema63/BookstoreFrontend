import React, { useState } from 'react';
import { ShoppingCart, Menu, X,  } from 'lucide-react';
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
            <span className="font-bold text-gray-800 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm">
              <span className="hidden sm:inline">Gloomshine Book Store</span>
              <span className="sm:hidden">Gloomshine</span>
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
            <Link to="/about" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Tablet Navigation Links (condensed) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/popular" className="text-gray-700 hover:text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Popular
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Search Bar and Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop Login/Signup Buttons */}
            <div className="flex items-center space-x-3">
              <Link to="/signup">
                <button className="bg-blue-800 text-white xl:px-6 xl:py-2.5 lg:px-4 lg:py-2 rounded-full font-semibold xl:text-base lg:text-sm hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap">
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                <button className="border-2 border-blue-500 text-blue-800 xl:px-6 xl:py-2.5 lg:px-4 lg:py-2 rounded-full font-semibold xl:text-base lg:text-sm hover:bg-amber-50 transition-all duration-300 whitespace-nowrap">
                  Log In
                </button>
              </Link>
            </div>
          </div>

          {/* Tablet Search Bar and Actions (smaller) */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            
            
            {/* Cart Icon */}
            <div className="relative">
              <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>

            {/* Tablet Login/Signup Buttons (smaller) */}
            <div className="flex items-center space-x-2">
              <Link to="/signup">
                <button className="bg-blue-800 text-white px-3 py-1.5 rounded-full font-semibold text-xs hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap">
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                <button className="border-2 border-blue-500 text-blue-800 px-3 py-1.5 rounded-full font-semibold text-xs hover:bg-amber-50 transition-all duration-300 whitespace-nowrap">
                  Log In
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button and icons */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Search Icon */}
            
            
            {/* Mobile Cart Icon */}
            <div className="relative">
              <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
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
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/popular"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Popular
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Contact Us
              </Link>
              
              {/* Mobile Search Bar */}
              <div className="px-3 py-2">
             
              </div>

              {/* Mobile Login/Signup Buttons */}
              <div className="px-3 py-2">
                <div className="flex flex-col space-y-3">
                  <Link to="/signup" className="w-full">
                    <button className="w-full bg-blue-800 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Sign up
                    </button>
                  </Link>
                  <Link to="/login" className="w-full">
                    <button className="w-full border-2 border-blue-500 text-blue-800 px-6 py-3 rounded-full font-semibold text-base hover:bg-amber-50 transition-all duration-300">
                      Log In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="hidden md:block lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;