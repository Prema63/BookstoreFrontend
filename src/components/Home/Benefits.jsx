import React from "react";
import {
  BookOpen,
  Brain,
  Heart,
  Users,
  Clock,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Enhances Cognitive Function",
      description:
        "Regular reading improves memory, concentration, and analytical thinking skills while keeping your brain active and engaged.",
    },
    {
      icon: Heart,
      title: "Reduces Stress & Anxiety",
      description:
        "Reading can lower stress levels by up to 68%, providing a peaceful escape from daily pressures and worries.",
    },
    {
      icon: Users,
      title: "Improves Empathy",
      description:
        "Fiction reading helps develop emotional intelligence and understanding of different perspectives and cultures.",
    },
    {
      icon: Lightbulb,
      title: "Expands Knowledge",
      description:
        "Every book teaches you something new, building a vast repository of information and ideas you can draw upon.",
    },
    {
      icon: Clock,
      title: "Better Sleep Quality",
      description:
        "Reading before bed creates a calming routine that helps signal your brain it's time to wind down and rest.",
    },
    {
      icon: TrendingUp,
      title: "Vocabulary Enhancement",
      description:
        "Regular reading naturally expands your vocabulary and improves communication skills in both speaking and writing.",
    },
    {
      icon: Shield,
      title: "Mental Health Support",
      description:
        "Books provide comfort, guidance, and coping strategies while offering a healthy form of escapism and relaxation.",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description:
        "Reading fosters curiosity and a love for continuous learning, keeping your mind sharp throughout your lifetime.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Benefits of
            <span className="text-transparent bg-clip-text bg-blue-800 ml-3">
              Reading Books
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how the simple act of reading can transform your mind,
            enhance your well-being, and open doors to endless possibilities for
            personal growth and knowledge.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reading Journey section */}
        <div className="mt-16 text-center  ">
          <div className="bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2  rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-100/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Start Your Reading Journey Today
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Join millions of readers who have discovered the transformative
              power of books. Browse our collection and find your next great
              read.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <button className="bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Sign up
                </button>
              </Link>

              <Link to="/login">
                <button className="border-2 border--500 text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
