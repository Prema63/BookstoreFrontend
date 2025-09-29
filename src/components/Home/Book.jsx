import React from "react";
import { Star, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "by Jane Austen",
      rating: 4.8,
      price: "$12.99",
      category: "Love",
      description:
        "A timeless tale of love, class, and society in Regency England.",
      image:
        "https://i.etsystatic.com/20545894/r/il/ea212e/2193516572/il_fullxfull.2193516572_qc4h.jpg",
      categoryColor: "bg-pink-100 text-pink-700",
    },
    {
      id: 2,
      title: "The 7 Habits of Highly Effective People",
      author: "by Stephen Covey",
      rating: 4.7,
      price: "$15.99",
      category: "Knowledge",
      description:
        "A powerful guide to personal and professional effectiveness.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop",
      categoryColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      title: "A Brief History of Time",
      author: "by Stephen Hawking",
      rating: 4.6,
      price: "$14.5",
      category: "Knowledge",
      description:
        "An exploration of the universe from the Big Bang to Black Holes.",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=560&fit=crop",
      categoryColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "by F.Scott Fitzgerald",
      rating: 4.5,
      price: "$11.99",
      category: "Love",
      description:
        "A classic American novel about love, wealth and the American Dream.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop",
      categoryColor: "bg-pink-100 text-pink-700",
    },
    {
      id: 5,
      title: "Sapiens: A Brief History of Humankind",
      author: "by Yuval Noah Harari",
      rating: 4.9,
      price: "$16.99",
      category: "History",
      description:
        "The story of how we conquered the world and transformed ourselves.",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=560&fit=crop",
      categoryColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 6,
      title: "The Art of War",
      author: "by Sun Tzu",
      rating: 4.4,
      price: "$9.99",
      category: "History",
      description: "Ancient Chinese military treatise on strategy and warfare.",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=560&fit=crop",
      categoryColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 7,
      title: "Me Before You",
      author: "by Jojo Moyes",
      rating: 4.6,
      price: "$13.5",
      category: "Love",
      description:
        "A story of overwhelming joy of love, sacrifice, and new beginnings.",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=560&fit=crop",
      categoryColor: "bg-pink-100 text-pink-700",
    },
    {
      id: 8,
      title: "Atomic Habits",
      author: "by James Clear",
      rating: 4.8,
      price: "$17.99",
      category: "Knowledge",
      description: "Tiny changes, remarkable results. Transform your habits.",
      image:
        "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400&h=560&fit=crop",
      categoryColor: "bg-blue-100 text-blue-700",
    },
  ];

  const handleViewDetails = (bookId) => {
    console.log(`Viewing details for book ${bookId}`);
    // Navigation logic would go here in actual implementation
  };

  const handleViewAll = () => {
    console.log("Navigating to all books");
    // Navigation logic would go here in actual implementation
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Featured Books
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Discover our handpicked collection of bestsellers
            </p>
          </div>
          <Link to="/popular">
            <button className="px-6 py-2.5 text-sm font-semibold text-blue-800 bg-white border-2 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto">
              View All Books
            </button>
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {books?.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
          >
            {/* Book Image Container */}
            <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${book.categoryColor}`}
                >
                  {book.category}
                </span>
              </div>

              {/* Wishlist Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white rounded-full shadow-lg hover:bg-pink-50 transition-colors duration-200">
                  <Heart className="w-4 h-4 text-gray-700 hover:text-pink-600" />
                </button>
              </div>

              {/* Image */}
              <img
                src={book.image}
                // alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay on Hover */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300" /> */}
            </div>

            {/* Book Info */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              {/* Title & Author */}
              <div className="mb-3">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-800 transition-colors duration-200">
                  {book.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {book.author}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">
                    {book.rating}
                  </span>
                </div>
                <span className="text-xs text-gray-400">(200+ reviews)</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                {book.description}
              </p>

              {/* Price & Actions */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  {book.price}
                </span>
                <Link to={`/popular/bookdetails/${book.id}`}
                state={{ selectedBook: book }}>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0">
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">View</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
