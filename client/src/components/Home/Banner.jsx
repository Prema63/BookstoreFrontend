import React, { useState, useEffect } from "react";

const BannerSection = () => {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://img1.10bestmedia.com/Images/Photos/422226/The-Mysterious-Bookshop_54_990x660.jpg?auto=webp&width=3840&quality=75',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1700906010457-c7a565935b81?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N0b3JlfGVufDB8fDB8fHww'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 ">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content Section */}
            <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 z-10 relative">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Welcome to GloomShine
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Book Store
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="w-full sm:w-auto bg-white text-slate-700 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                  Browse Popular Books
                </button>

                <button className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSection;