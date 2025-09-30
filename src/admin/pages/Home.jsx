import React from "react";
import BannerSection from "../component/Home/BannerSection";
import CategorySection from "../component/Home/CategorySection";
import FeaturedBook from "../component/Home/FeaturedBook";
import AdvertisementSection from "../component/Home/AdvertisementSection";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3">Home Page Management</h1>
      <div className="w-full max-w-7xl border border-gray-200 py-6 rounded">
        <BannerSection />
        <CategorySection />
        <FeaturedBook />
        <AdvertisementSection/>
      </div>
    </div>
  );
};


export default Home;
