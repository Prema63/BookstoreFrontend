import React, { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  BookOpen,
  Mail,
  User,
  Lock,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { url } from "../../lib/Lib";
import axios from "axios";

export default function BookstoreSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // address: "",
    // city: "",
    // zipCode: "",
    favoriteGenres: [],
    newsletter: true,
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Sci-Fi",
    "Fantasy",
    "Novel",
    "Motivational",
    "Poetry",
    "Young Adult",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGenreChange = (genre) => {
    setFormData((prev) => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.includes(genre)
        ? prev.favoriteGenres.filter((g) => g !== genre)
        : [...prev.favoriteGenres, genre],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.terms)
      newErrors.terms = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const { confirmPassword, ...dataToSend } = formData; 

    console.log("Sending data:", dataToSend); 

    const response = await axios.post(
      `${url}api/auth/register`,
      dataToSend,
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Success:", response.data);
    alert("Account created successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      // address: "",
      // city: "",
      // zipCode: "",
      favoriteGenres: [],
      newsletter: true,
      terms: false,
    });
    setErrors({});
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      alert(error.response.data.message || "Failed to create account");
    } else {
      console.error("Network Error:", error);
      alert("Network error");
    }
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50  to-purple-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-800 p-3 rounded-full shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Join Our Book Community
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Create your account and discover your next favorite book. Enjoy
            personalized recommendations, exclusive offers, and join our
            community of book lovers.
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 sm:px-8 py-8">
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-800" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none transition-colors ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none transition-colors ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-800" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none transition-colors"
                        placeholder="+91 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-blue-800" />
                  Security
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800  transition-colors ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 pr-12 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-800 transition-colors ${
                          errors.confirmPassword
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Reading Preferences
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Favorite Genres (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {genres.map((genre) => (
                      <label
                        key={genre}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.favoriteGenres.includes(genre)}
                          onChange={() => handleGenreChange(genre)}
                          className="w-4 h-4 border-gray-300 rounded "
                        />
                        <span className="text-sm text-gray-700">{genre}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter and Terms */}
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-gray-700">
                    Subscribe to our newsletter for book recommendations and
                    exclusive offers
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="w-4 h-4  border-gray-300 rounded mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-blue-800 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-800 underline">
                      Privacy Policy
                    </a>
                    *
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-blue-800 text-sm">{errors.terms}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Create My Account
                </button>

                {/* Already have account message */}
                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
