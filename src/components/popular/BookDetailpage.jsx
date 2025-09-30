import React, { useState, useContext } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  ArrowLeft,
  Book,
  Clock,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const BookDetailsPage = ({ book, onBack, onBookClick }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedBook = location?.state?.selectedBook;

  if (!selectedBook) {
    return (
      <div className="text-center mt-10">
        <h2>Book not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-800 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { addToCart } = useContext(CartContext);
  const [selectedTab, setSelectedTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "details", label: "Details" },
    { id: "reviews", label: "Reviews" },
  ];

  const handleRelatedBookClick = (relatedBook) => {
    if (onBookClick) {
      onBookClick(relatedBook);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // full stars
    const halfStar = rating % 1 >= 0.5; // half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
        />
      );
    }
    if (halfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-yellow-200 fill-current" />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/popular")}
            className="flex items-center text-blue-800 hover:text-blue-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to books
          </button>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Book Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              <div className="w-[40vw]  h-[95vh] ml-8 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                {/* <Book className="w-16 h-16 sm:w-24 sm:h-24 text-gray-400" /> */}
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {selectedBook.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                {selectedBook.author}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="flex space-x-1">
                  {renderStars(selectedBook.rating)}
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-900">
                  {selectedBook.rating}
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  {/* ({selectedBook.reviews.length} reviews) */}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-bold text-blue-800">
                  {selectedBook.price}
                </span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Add to Cart */}
                <button
                  onClick={() => {
                    addToCart(selectedBook, quantity);
                    navigate("/cart");
                  }}
                  className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg shadow-md border border-blue-700 transition-all duration-300 transform hover:scale-105 hover:bg-blue-900 hover:shadow-lg w-full sm:w-auto"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Add to Cart
                </button>

                {/* Buy Now */}
                <button className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-800 rounded-lg shadow-md border border-blue-900 transition-all duration-300 transform hover:scale-105  hover:shadow-lg w-full sm:w-auto">
                  Buy Now
                </button>

                {/* Favorite */}
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                    isFavorite
                      ? "border-red-500 bg-red-50 text-red-600 shadow-md hover:shadow-lg"
                      : "border-gray-300 text-gray-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      isFavorite ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                {/* <span className="truncate">{book.pages} pages</span> */}
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                {/* <span className="truncate">{book.language}</span> */}
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">Bestseller</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Book className="w-4 h-4 mr-2 flex-shrink-0" />
                {/* <span className="truncate">{book.publishDate}</span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8 lg:mb-12">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-6 min-w-max sm:min-w-0">
              {tabs?.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-3 sm:py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                    selectedTab === tab.id
                      ? "border-blue-800 text-blue-800"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6">
            {selectedTab === "description" && (
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {/* {book.description} */}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {/* {book.fullDescription} */}
                </p>
              </div>
            )}

            {selectedTab === "details" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">ISBN:</span>
                    <span className="text-gray-600 text-right">
                      {/* {book.isbn} */}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Pages:</span>
                    {/* <span className="text-gray-600">{book.pages}</span> */}
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Language:</span>
                    {/* <span className="text-gray-600">{book.language}</span> */}
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">
                      Publisher:
                    </span>
                    <span className="text-gray-600 text-right">
                      {/* {book.publisher} */}
                    </span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">
                      Publish Date:
                    </span>
                    <span className="text-gray-600 text-right">
                      {/* {book.publishDate} */}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">
                      Dimensions:
                    </span>
                    <span className="text-gray-600 text-right">
                      {/* {book.dimensions} */}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Weight:</span>
                    {/* <span className="text-gray-600">{book.weight}</span> */}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "reviews" && (
              <div className="space-y-4 sm:space-y-6">
                {/* {book.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-4 sm:pb-6 last:border-b-0"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm sm:text-base text-blue-800 font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {review.name}
                          </h4>
                          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex space-x-1 mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            )}
          </div>
        </div>

        {/* Related book */}
        {/* <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Related book</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {book?.relatedbook?.map((relatedBook) => (
              <div
                key={relatedBook?.id}
                onClick={() => handleRelatedBookClick(relatedBook)}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <Book className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm sm:text-base">
                  {relatedBook.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{relatedBook.author}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">{relatedBook.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-blue-800 text-sm sm:text-base">{relatedBook.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm text-gray-600">{relatedBook.rating}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default BookDetailsPage;
