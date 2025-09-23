import React from 'react';
import { Star, ShoppingCart} from 'lucide-react';
import { Link } from 'react-router-dom';


const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "by Jane Austen",
      rating: 4.8,
      price: "$12.99",
      category: "Love",
      description: "A timeless tale of love, class, and society in Regency England.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-red-100 text-red-600"
    },
    {
      id: 2,
      title: "The 7 Habits of Highly Effective People",
      author: "by Stephen Covey",
      rating: 4.7,
      price: "$15.99",
      category: "Knowledge",
      description: "A powerful guide to personal and professional effectiveness.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-blue-100 text-blue-600"
    },
    {
      id: 3,
      title: "A Brief History of Time",
      author: "by Stephen Hawking",
      rating: 4.6,
      price: "$14.5",
      category: "Knowledge",
      description: "An exploration of the universe from the Big Bang to Black Holes.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-blue-100 text-blue-600"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "by F. Scott Fitzgerald",
      rating: 4.5,
      price: "$11.99",
      category: "Love",
      description: "A classic American novel about love, wealth and the American Dream.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-red-100 text-red-600"
    },
    {
      id: 5,
      title: "Sapiens: A Brief History of Humankind",
      author: "by Yuval Noah Harari",
      rating: 4.9,
      price: "$16.99",
      category: "History",
      description: "The story of how we conquered the world and transformed ourselves.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-green-100 text-green-600"
    },
    {
      id: 6,
      title: "The Art of War",
      author: "by Sun Tzu",
      rating: 4.4,
      price: "$9.99",
      category: "History",
      description: "Ancient Chinese military treatise on strategy and warfare.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 7,
      title: "Me Before You",
      author: "by Jojo Moyes",
      rating: 4.6,
      price: "$13.5",
      category: "Love",
      description: "A story of overwhelming joy of love, sacrifice, and new beginnings.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-red-100 text-red-600"
    },
    {
      id: 8,
      title: "Atomic Habits",
      author: "by James Clear",
      rating: 4.8,
      price: "$17.99",
      category: "Knowledge",
      description: "Tiny changes, remarkable results. Transform your habits.",
      image: "/api/placeholder/200/280",
      categoryColor: "bg-blue-100 text-blue-600"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium text-gray-700">{rating}</span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Featured Books
        </h2>
        <Link to= "/popular">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 border-2 border-blue-800 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            View All
          </button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              {/* Category */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${book.categoryColor}`}>
                  {book.category}
                </span>
              </div>
            
            </div>

            {/* Book Info */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-800 transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{book.author}</p>
              
              {/* Rating */}
              <div className="mb-3">
                {renderStars(book.rating)}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {book.description}
              </p>

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{book.price}</span>
                <button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="hidden sm:inline">Add to Cart</span>
                  <span className="sm:hidden">Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;