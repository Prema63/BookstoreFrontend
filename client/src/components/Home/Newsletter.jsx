import React, { useState } from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const PinterestIcon = () => (
    <svg 
      className="w-6 h-6" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
    </svg>
  );

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-wide">
          SIGN UP AND SAVE
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        
        {/* Email Input */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 bg-white border-b-2 border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
            <button
              onClick={handleSubmit}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-800 transition-colors duration-200"
              aria-label="Subscribe"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
          
          {isSubscribed && (
            <div className="mt-4 p-3 bg-blue-100 border-2 border-blue-800 rounded-md">
              <p className="text-blue-900 text-sm">Thank you for subscribing!</p>
            </div>
          )}
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Pinterest"
          >
            <PinterestIcon />
          </a>
        </div>
      </div>
    </div>
  );
}