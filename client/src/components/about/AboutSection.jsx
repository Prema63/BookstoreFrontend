import React from 'react';
import { BookOpen, Heart, Users, Award, Truck, Coffee, Calendar, Star, MapPin, Phone, Mail, Clock } from 'lucide-react';
import BenefitsSection from '../Home/Benefits';

const AboutSection = () => {
const bookCategories = [
  { 
    name: 'Fiction', 
    description: 'Classic novels, contemporary fiction, and literary masterpieces.' 
  },
  { 
    name: 'Non-Fiction', 
    description: 'Biographies, history, science, self-help, and real-world accounts.' 
  },
  { 
    name: 'Romance', 
    description: 'Love stories, contemporary romance, and timeless romantic classics.' 
  },
  {   
    name: 'Sci-Fi', 
    description: 'Science fiction exploring futuristic technology, space, and adventures.' 
  },
  { 
    name: 'Fantasy', 
    description: 'Magical worlds, epic quests, mythical creatures, and heroic tales.' 
  },
  { 
    name: 'Novel', 
    description: 'General novels across various genres and storytelling styles.' 
  },
  { 
    name: 'Motivational', 
    description: 'Inspiring stories, personal growth, and self-improvement books.' 
  },
  { 
    name: 'Poetry', 
    description: 'Collections of poems, verses, and lyrical expressions of emotion.' 
  },
  { 
    name: 'Young Adult', 
    description: 'Coming-of-age stories, adventures, and themes for teen readers.' 
  },
];
 

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Delivery',
      description: 'Free shipping on orders over $50 within the city'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Reading Café',
      description: 'Cozy space to read with premium coffee and snacks'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Book Clubs',
      description: 'Weekly book discussions and author meet-ups'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Recommendations',
      description: 'Expert staff recommendations based on your preferences'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Loyalty Program',
      description: 'Earn points with every purchase and get exclusive discounts'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Special Orders',
      description: 'Can\'t find a book? We\'ll order it specially for you'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Books in Stock' },
    { number: '15+', label: 'Years of Service' },
    { number: '25K+', label: 'Happy Customers' },
    { number: '200+', label: 'Events Hosted' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-blue-800 rounded-full shadow-lg">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-800">BookStore</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where every page tells a story, and every story finds its reader. 
            Discover your next favorite book in our carefully curated collection.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 font-medium">Passionate about books since.......</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009 by literature enthusiasts Sarah and Michael Chen, BookHaven 
                  began as a small neighborhood bookstore with a simple mission: to create a 
                  sanctuary for book lovers and foster a love of reading in our community.
                </p>
                <p>
                  What started with 500 carefully selected books has grown into a thriving 
                  literary hub with over 50,000 titles. We believe that books have the power 
                  to transform lives, spark imagination, and connect people across cultures 
                  and generations.
                </p>
                <p>
                  Today, BookHaven is more than just a bookstore – we're a community center 
                  where readers gather, ideas flourish, and stories come alive through our 
                  events, book clubs, and cozy reading spaces.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
                  <p className="text-sm text-gray-600">Dedicated to spreading the love of reading</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-sm text-gray-600">Building connections through literature</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
                  <p className="text-sm text-gray-600">Carefully curated book selection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Knowledge</h3>
                  <p className="text-sm text-gray-600">Expert recommendations and guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer more than just books – we provide a complete literary experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-800 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Book Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of genres and discover your next great read
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection/>

      

      {/* Contact Info Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl opacity-90">
              Come and experience the magic of BookStore
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="opacity-90">Sector 63 pocket C-87<br />Noida, UttarPradesh, 201301</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="opacity-90">Mon-Sat: 9AM-9PM<br />Sunday: 10AM-7PM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="opacity-90">+91 xxxxxxxx90 <br />gloomshinebookstore@gmil.com</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutSection;