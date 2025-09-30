import React from "react";
import { Link } from "react-router-dom";

export default function Advertisement() {
  return (
    <div
      className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/GBSjUNt868C700vt7YWI-1FDGbvdURN3tgNEp2YlfQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/Njg4NzM4ODI5ODct/NzdmMzkzZTg1OTE2/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5IeDhkMjl0/WVc0bE1qQjNhWFJv/SlRJd1ltOXZhM3hs/Ym53d2ZId3dmSHg4/TUE9PQ')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center lg:text-left text-white max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          A Better way to Buy
          <span className="block mt-2">Books Online</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Discover your next great read with ease and convenience.
        </p>
        <Link to = "/popular">
          <button className="px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg font-semibold transition-colors">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
