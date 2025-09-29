import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const CategorySection = () => {
  const initialCategories = [
    {
      id: "fiction",
      title: "Fiction",
      image:
        "https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg",
    },
    {
      id: "non-Fiction",
      title: "Non-Fiction",
      image:
        "https://blog-cdn.reedsy.com/directories/gallery/241/large_36dc2bfa3ecfa29a41812207f76df7a8.jpg",
    },
    {
      id: "romance",
      title: "Romance",
      image:
        "https://marketplace.canva.com/EAGKkPbakT4/1/0/1003w/canva-purple-sky-book-cover-UOKyRwxSEZQ.jpg",
    },
    {
      id: "sci-fi",
      title: "Sci-Fi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPSfiO1Nx6Ceo9GGGZiDBiCEfFSYdHVqC0g&s",
    },
    {
      id: "fantasy",
      title: "Fantasy",
      image:
        "https://blog-cdn.reedsy.com/directories/gallery/257/large_974bcaf2f9de1c92bf74a60f18e86d47.jpg",
    },
    {
      id: "novel",
      title: "Novel",
      image:
        "https://images2.penguinrandomhouse.com/cover/9780593422182",
    },
    {
      id: "motivational",
      title: "Motivational",
      image:
        "https://i.pinimg.com/736x/66/e9/30/66e930ec16b3e518f04ba50d04d82eb4.jpg",
    },
    {
      id: "poetry",
      title: "Poetry",
      image:
        "https://designdusk.com/wp-content/uploads/2025/06/The-Quiet-Season.webp",
    },
    {
      id: "youngadult",
      title: "Young Adult",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIz3PO4GI4oYXPMty8_MAR3snOq1W8zouJ9eMLYJGi0kDZj6wOWhwOhEQjpE6HGKAdmzY&usqp=CAU",
    },

    {
      id: "action",
      title: "Action",
      image:
        "https://images-platform.99static.com//OIpV9mUCUWHFmGbLuiK1qxs0KsA=/1139x0:3848x2709/fit-in/500x500/projects-files/29/2919/291915/4f971bfe-2ea6-4ff7-8c5a-7eba039fa15c.jpg",
    },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);
  const scrollContainerRef = useRef(null);

  // Function to shuffle array
  const shuffleCategories = () => {
    setCategories((prev) => {
      const shuffled = [...prev].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  };

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2);
      } else if (width < 768) {
        setItemsPerView(3);
      } else if (width < 1024) {
        setItemsPerView(4);
      } else if (width < 1280) {
        setItemsPerView(5);
      } else {
        setItemsPerView(6);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Shuffle every 5 seconds
  useEffect(() => {
    const interval = setInterval(shuffleCategories, 5000);
    return () => clearInterval(interval);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mt-7">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text ">
              Browse by Category
            </h2>
            <div className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center group transition-all duration-300">
              <span className="text-lg font-semibold">Explore more</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Categories Container with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-3 sm:p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 hover:bg-blue-50"
            }`}
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-3 sm:p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 hover:bg-blue-50"
            }`}
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
          </button>

          {/* Categories Grid */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden px-8 sm:px-12"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8 lg:gap-10"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
                width: `${(categories.length / itemsPerView) * 100}%`,
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                  style={{ width: `${100 / categories.length}%` }}
                >
                  {/* Category Image Circle */}
                  <div className="relative mb-4  transition-all duration-300">
                    {/* <div className="absolute inset-0rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div> */}
                    <img
                      src={category.image}
                      alt={category.title}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-cover shadow-lg ring-4 ring-white group-hover:ring-blue-200 transition-all duration-300"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-300"></div> */}
                  </div>

                  {/* Category Title */}
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-all duration-300 px-2">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
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
