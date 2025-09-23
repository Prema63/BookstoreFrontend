import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function QuickViewModal({ book, onClose }) {
  if (!book) return null; 

  
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/10 bg-opacity-10 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      {/* Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto overflow-x-hidden flex-1" style={{ scrollbarWidth: 'thin' }}>
          <div className="flex flex-col lg:flex-row min-h-full">
            {/* Cover Section */}
            <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="relative max-w-sm w-full">
                <div className="bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 rounded-lg shadow-2xl p-4 sm:p-6 lg:p-8">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                      {book.title}
                    </h2>

                    <h3 className="text-base sm:text-lg font-medium text-gray-600">
                      {book.author}
                    </h3>

                    <div className="pt-3 sm:pt-4 border-t border-amber-300">
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content*/}
            <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-2 sm:mb-4">
                  {book.title.toUpperCase()}
                </h1>

                {/* Pricing  */}
                <div className="space-y-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    {book.price}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                  <button className="w-full bg-blue-50 border-2 border-blue-800 text-blue-800 py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-100 transition-colors">
                    ADD TO CART
                  </button>
                  <button className="w-full bg-blue-800 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-900 transition-colors">
                    BUY IT NOW
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Format:</span> Paperback
                  </div>
                  <div>
                    <span className="font-semibold">Language:</span> English
                  </div>
                  <div>
                    <span className="font-semibold">Category:</span> {book.category}
                  </div>
                  <div>
                    <span className="font-semibold">Rating:</span> {book.rating} ⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}