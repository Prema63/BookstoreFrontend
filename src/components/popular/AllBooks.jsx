import React, { useState } from "react";
import { Star, ShoppingCart, Book } from "lucide-react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const book = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "by Jane Austen",
      rating: 4.8,
      price: "$12.99",
      category: "Love",
      description:
        "A timeless tale of love, class, and society in Regency England.",
      fullDescription:
        "First published in 1813, Pride and Prejudice is one of the most beloved novels in English literature. It tells the story of Elizabeth Bennet and her evolving relationship with the proud Mr. Darcy.",
      image:
        "https://i.etsystatic.com/20545894/r/il/ea212e/2193516572/il_fullxfull.2193516572_qc4h.jpg",
      categoryColor: "bg-red-100 text-red-600",
      isbn: "9780141439518",
      pages: 432,
      language: "English",
      publisher: "Penguin Classics",
      publishDate: "2003",
      reviews: [
        {
          id: 1,
          name: "Alice",
          rating: 5,
          date: "2024-03-12",
          comment: "A masterpiece!",
        },
        {
          id: 2,
          name: "John",
          rating: 4,
          date: "2024-06-05",
          comment: "Beautifully written, but a bit slow at times.",
        },
      ],
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
      fullDescription:
        "This classic self-help book introduces seven habits that can transform your personal and professional life, focusing on effectiveness, leadership, and self-mastery.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop",
      categoryColor: "bg-blue-100 text-blue-600",
      isbn: "9780743269513",
      pages: 381,
      language: "English",
      publisher: "Free Press",
      publishDate: "2004",
      reviews: [
        {
          id: 1,
          name: "Sophia",
          rating: 5,
          date: "2024-01-10",
          comment: "Life changing principles.",
        },
        {
          id: 2,
          name: "Mike",
          rating: 4,
          date: "2024-04-22",
          comment: "Very insightful and practical.",
        },
      ],
    },
    {
      id: 3,
      title: "A Brief History of Time",
      author: "by Stephen Hawking",
      rating: 4.6,
      price: "$14.50",
      category: "Knowledge",
      description:
        "An exploration of the universe from the Big Bang to Black Holes.",
      fullDescription:
        "Stephen Hawking explains the most complex ideas about space, time, and black holes in a way that is accessible to the general reader.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=560&fit=crop",
      categoryColor: "bg-blue-100 text-blue-600",
      isbn: "9780553380163",
      pages: 212,
      language: "English",
      publisher: "Bantam",
      publishDate: "1998",
      reviews: [
        {
          id: 1,
          name: "David",
          rating: 5,
          date: "2024-05-14",
          comment: "Mind-expanding book!",
        },
        {
          id: 2,
          name: "Lara",
          rating: 4,
          date: "2024-06-20",
          comment: "Fascinating but dense.",
        },
      ],
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "by F. Scott Fitzgerald",
      rating: 4.5,
      price: "$11.99",
      category: "Love",
      description:
        "A classic American novel about love, wealth and the American Dream.",
      fullDescription:
        "Published in 1925, this novel tells the tragic story of Jay Gatsby and his unrequited love for Daisy Buchanan. It captures the spirit of the Jazz Age.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop",
      categoryColor: "bg-red-100 text-red-600",
      isbn: "9780743273565",
      pages: 180,
      language: "English",
      publisher: "Scribner",
      publishDate: "2004",
      reviews: [
        {
          id: 1,
          name: "Emma",
          rating: 5,
          date: "2024-02-03",
          comment: "An all-time favorite.",
        },
        {
          id: 2,
          name: "Ryan",
          rating: 4,
          date: "2024-08-15",
          comment: "Captures the roaring twenties perfectly.",
        },
      ],
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
      fullDescription:
        "Harari traces the history of humanity from the Stone Age to the modern era, exploring how Homo sapiens became the dominant species.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=560&fit=crop",
      categoryColor: "bg-green-100 text-green-600",
      isbn: "9780062316097",
      pages: 498,
      language: "English",
      publisher: "Harper",
      publishDate: "2015",
      reviews: [
        {
          id: 1,
          name: "Olivia",
          rating: 5,
          date: "2024-03-01",
          comment: "Eye-opening and thought-provoking.",
        },
        {
          id: 2,
          name: "Chris",
          rating: 5,
          date: "2024-06-25",
          comment: "Best history book I've read.",
        },
      ],
    },
    {
      id: 6,
      title: "The Art of War",
      author: "by Sun Tzu",
      rating: 4.4,
      price: "$9.99",
      category: "History",
      description: "Ancient Chinese military treatise on strategy and warfare.",
      fullDescription:
        "The Art of War is one of the oldest and most successful books on military strategy and tactics. It has influenced both Eastern and Western military thinking.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=560&fit=crop",
      categoryColor: "bg-yellow-100 text-yellow-700",
      isbn: "9781590302255",
      pages: 273,
      language: "English",
      publisher: "Shambhala",
      publishDate: "2005",
      reviews: [
        {
          id: 1,
          name: "Leo",
          rating: 4,
          date: "2024-04-11",
          comment: "Timeless strategies.",
        },
        {
          id: 2,
          name: "Nina",
          rating: 5,
          date: "2024-07-19",
          comment: "Applicable to business and life too.",
        },
      ],
    },
    {
      id: 7,
      title: "Me Before You",
      author: "by Jojo Moyes",
      rating: 4.6,
      price: "$13.50",
      category: "Love",
      description:
        "A story of overwhelming joy of love, sacrifice, and new beginnings.",
      fullDescription:
        "A moving novel that explores the relationship between Louisa Clark and Will Traynor, a man left paralyzed after an accident.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=560&fit=crop",
      categoryColor: "bg-red-100 text-red-600",
      isbn: "9780143124541",
      pages: 369,
      language: "English",
      publisher: "Penguin Books",
      publishDate: "2016",
      reviews: [
        {
          id: 1,
          name: "Sophia",
          rating: 5,
          date: "2024-02-28",
          comment: "So emotional and heartwarming.",
        },
        {
          id: 2,
          name: "Jack",
          rating: 4,
          date: "2024-06-14",
          comment: "Tear-jerker with a great message.",
        },
      ],
    },
    {
      id: 8,
      title: "Atomic Habits",
      author: "by James Clear",
      rating: 4.8,
      price: "$17.99",
      category: "Knowledge",
      description: "Tiny changes, remarkable results. Transform your habits.",
      fullDescription:
        "Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies to form good habits, break bad ones, and master tiny behaviors that lead to success.",
      image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400&h=560&fit=crop",
      categoryColor: "bg-blue-100 text-blue-600",
      isbn: "9780735211292",
      pages: 320,
      language: "English",
      publisher: "Avery",
      publishDate: "2018",
      reviews: [
        {
          id: 1,
          name: "Ella",
          rating: 5,
          date: "2024-01-09",
          comment: "Best self-help book I’ve read.",
        },
        {
          id: 2,
          name: "Tom",
          rating: 5,
          date: "2024-05-18",
          comment: "Practical and motivating.",
        },
      ],
    },
  ];


  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl mb-3 mx-auto md:text-3xl font-semibold text-blue-800 hover:text-blue-900">
          Popular Books
        </h2>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {book?.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative"
          >
            {/* Book Image Container */}
            <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${book.categoryColor}`}
                >
                  {book.category}
                </span>
              </div>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Book Info */}
            <div className="p-4 flex flex-col">
              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {book.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-gray-900">
                  {book.price}
                </span>
              </div>

              {/* Quick View Button */}
              <Link
                to={`/popular/bookdetails/${book.id}`}
                state={{ selectedBook: book }}
              >
                <button className="w-[17vw] min-w-[120px] max-w-[200px] py-2 bg-blue-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  Quick View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;