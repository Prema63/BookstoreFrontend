import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Everyone_talkingSection = () => {
  const initialBooks = [
    {
      id: "city-uncertain-walls",
      title: "City & Its Uncertain Walls",
      author: "Haruki Murakami",
      image:
        "https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg",
    },
    {
      id: "hansel-gretel",
      title: "Hansel & Gretel",
      author: "Stephen King",
      image:
        "https://blog-cdn.reedsy.com/directories/gallery/241/large_36dc2bfa3ecfa29a41812207f76df7a8.jpg",
    },
    {
      id: "little-frogs-guide",
      title: "Little Frogs Guide to Life",
      author: "Maybell Eequay",
      image:
        "https://marketplace.canva.com/EAGKkPbakT4/1/0/1003w/canva-purple-sky-book-cover-UOKyRwxSEZQ.jpg",
    },
    {
      id: "lost-library",
      title: "Lost Library",
      author: "Rebecca Stead",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPSfiO1Nx6Ceo9GGGZiDBiCEfFSYdHVqC0g&s",
    },
    // {
    //   id: "on-tyranny",
    //   title: "On Tyranny: Twenty Lessons From the...",
    //   author: "Timothy Snyder",
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/P/0804190119.01.L.jpg",
    // },
    {
      id: "strange-picture",
      title: "Strange Picture",
      author: "Uketsu",
      image:
        "https://blog-cdn.reedsy.com/directories/gallery/257/large_974bcaf2f9de1c92bf74a60f18e86d47.jpg",
    },
    {
      id: "atomic-habits",
      title: "Atomic Habits",
      author: "James Clear",
      image:
        "https://images-na.ssl-images-amazon.com/images/P/0735211299.01.L.jpg",
    },
    {
      id: "educated",
      title: "Educated",
      author: "Tara Westover",
      image:
        "https://images-na.ssl-images-amazon.com/images/P/0399590501.01.L.jpg",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [hoveredBook, setHoveredBook] = useState(null);
  const scrollContainerRef = useRef(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setItemsPerView(2);
      } else if (width < 640) {
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

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, books.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [books.length, itemsPerView]);

  const maxIndex = Math.max(0, books.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text ">
              Everyone's Talking About
            </h2>
          </div>
        </div>

        {/* Books Container */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:scale-110 hover:bg-blue-50 opacity-80 hover:opacity-100"
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "opacity-40 cursor-not-allowed"
                : "hover:scale-110 hover:bg-blue-50 opacity-80 hover:opacity-100"
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Books Grid */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden px-4 sm:px-6 md:px-8"
          >
            <div
              className="flex transition-transform duration-700 ease-in-out gap-3 sm:gap-4 md:gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
                width: `${(books.length / itemsPerView) * 100}%`,
              }}
            >
              {books?.map((book, index) => (
                <div
                  key={book.id}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: `${100 / books.length}%` }}
                  onMouseEnter={() => setHoveredBook(book.id)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-3 sm:p-4 md:p-6 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Book Cover */}
                    <div className="relative mb-3 sm:mb-4 flex justify-center">
                      <div className="relative group/image">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-40 lg:w-32 lg:h-44 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl relative z-10"
                          onError={(e) => {
                            e.target.src = `?text=${encodeURIComponent(
                              book.title
                            )}`;
                          }}
                        />
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="relative z-10">
                      <Link
                        to={`/popular/bookdetails/${book.id}`}
                        state={{ selectedBook: book }}
                      >
                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                          {book.title}
                        </h3>

                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors duration-300">
                          {book.author}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Everyone_talkingSection;
