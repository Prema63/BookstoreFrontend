import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const CategorySection = () => {
  const initialCategories = [
    { id: "fiction", title: "Fiction", image: "https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" },
    { id: "non-Fiction", title: "Non-Fiction", image: "https://blog-cdn.reedsy.com/directories/gallery/241/large_36dc2bfa3ecfa29a41812207f76df7a8.jpg" },
    { id: "romance", title: "Romance", image: "https://marketplace.canva.com/EAGKkPbakT4/1/0/1003w/canva-purple-sky-book-cover-UOKyRwxSEZQ.jpg" },
    { id: "sci-fi", title: "Sci-Fi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPSfiO1Nx6Ceo9GGGZiDBiCEfFSYdHVqC0g&s" },
    { id: "fantasy", title: "Fantasy", image: "https://blog-cdn.reedsy.com/directories/gallery/257/large_974bcaf2f9de1c92bf74a60f18e86d47.jpg" },
    { id: "novel", title: "Novel", image: "https://images2.penguinrandomhouse.com/cover/9780593422182" },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const scrollContainerRef = useRef(null);

  // Adjust items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(2);
      else if (width < 768) setItemsPerView(3);
      else if (width < 1024) setItemsPerView(4);
      else if (width < 1280) setItemsPerView(5);
      else setItemsPerView(6);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            Browse by Category
          </h2>
          <div className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center group transition-all duration-300">
            <span className="text-lg font-semibold">Explore more</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/3 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:scale-110 hover:bg-blue-50 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/3 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:scale-110 hover:bg-blue-50 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Categories */}
        <div ref={scrollContainerRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsPerView
              }%)`,
              width: `${(categories.length / itemsPerView) * 100}%`,
            }}
          >
            {categories.concat(categories).map((category, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center"
                style={{ width: `${100 / categories.length}%` }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-cover shadow-lg ring-4 ring-white"
                />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center mt-2">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex % categories.length
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
