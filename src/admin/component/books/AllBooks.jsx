import React, { useState } from "react";
import {
  Upload,
  Image,
  Save,
  Star,
  RotateCcw,
  X,
  Plus,
  Edit,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function AllBook() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [featuredData, setFeaturedData] = useState({
    image: null,
    bookType: "",
    author: "",
    rating: "",
    price: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedData({ ...featuredData, image: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setFeaturedData({ ...featuredData, [field]: value });
  };

  const handleSubmit = () => {
    if (!featuredData.bookType || !featuredData.author) {
      alert("Please fill in at least Book Type and Author");
      return;
    }

    const newBook = {
      ...featuredData,
      image: imagePreview,
      id: Date.now(),
    };

    if (editingIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editingIndex] = newBook;
      setBooks(updatedBooks);
      setEditingIndex(null);
      alert("Book updated successfully!");
    } else {
      setBooks([...books, newBook]);
      alert("Book added successfully!");
    }

    handleReset();
    setIsModalOpen(false);
  };

  const handleReset = () => {
    setFeaturedData({
      image: null,
      bookType: "",
      author: "",
      rating: "",
      price: "",
      description: "",
    });
    setImagePreview(null);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const book = books[index];
    setFeaturedData({
      image: book.image,
      bookType: book.bookType,
      author: book.author,
      rating: book.rating,
      price: book.price,
      description: book.description,
    });
    setImagePreview(book.image);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((_, i) => i !== index));
    }
  };

  const openAddBook = () => {
    handleReset();
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-6xl mt-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          All Books Management
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {books.length} {books.length === 1 ? "book" : "books"}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6">
          {/* Add Book Button */}
          <div className="mb-6">
            <button
              onClick={openAddBook}
              className="flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium shadow-md"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Book
            </button>
          </div>

          {/* Books Grid */}
          {books?.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <Image className="w-20 h-20 mx-auto mb-4 text-gray-300" />
              <p className="text-xl text-gray-600 mb-2">No books added yet</p>
              <p className="text-sm text-gray-500 mb-6">
                Click "Add New Book" to get started
              </p>
              <button
                onClick={openAddBook}
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Book
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div
                  key={book.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Book Image */}
                  <div className="h-56 bg-gray-100 flex items-center justify-center">
                    {book.image ? (
                      <img
                        src={book.image}
                        alt={book.bookType}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image className="w-16 h-16 text-gray-300" />
                    )}
                  </div>

                  {/* Book Details */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                      {book.bookType}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      by {book.author}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      {book.rating && (
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="text-sm font-medium text-gray-700">
                            {book.rating}
                          </span>
                        </div>
                      )}
                      {book.price && (
                        <span className="text-lg font-bold text-blue-800">
                          ${book.price}
                        </span>
                      )}
                    </div>

                    {book.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {book.description}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-800 rounded hover:bg-blue-100 transition-colors text-sm font-medium"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors text-sm font-medium"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          )}
        </div>
      )}


      {/* Add/Edit Book Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingIndex !== null ? "Edit Book" : "Add New Book"}
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  handleReset();
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Image Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Book Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="book-image"
                      />
                      <label
                        htmlFor="book-image"
                        className="block w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center h-full">
                          {imagePreview ? (
                            <div className="relative w-full h-full">
                              <img
                                src={imagePreview}
                                alt="Book preview"
                                className="w-full h-full object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                                <Upload className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          ) : (
                            <>
                              <Upload className="w-8 h-8 text-gray-400 mb-2" />
                              <span className="text-sm text-gray-500">
                                Click to upload book image
                              </span>
                            </>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Book Type */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Book Type *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter book type (e.g., Fiction, Non-Fiction, Mystery)"
                      value={featuredData.bookType}
                      onChange={(e) =>
                        handleInputChange("bookType", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Author */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Author Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter author name"
                      value={featuredData.author}
                      onChange={(e) =>
                        handleInputChange("author", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Rating */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Rating
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="5"
                        step="0.1"
                        placeholder="0.0"
                        value={featuredData.rating}
                        onChange={(e) =>
                          handleInputChange("rating", e.target.value)
                        }
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Star className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        value={featuredData.price}
                        onChange={(e) =>
                          handleInputChange("price", e.target.value)
                        }
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Book Description
                  </label>
                  <textarea
                    placeholder="Enter book description"
                    value={featuredData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                  {/* Reset Button */}
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset Form
                  </button>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="flex items-center justify-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    {editingIndex !== null ? "Update Book" : "Save Book"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}