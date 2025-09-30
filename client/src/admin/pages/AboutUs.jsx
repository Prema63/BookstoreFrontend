import React from "react";
import AboutHeaderSection from "../component/aboutus/Header";
import AboutStatsSection from "../component/aboutus/StatSection";
import OurStorySection from "../component/aboutus/StorySection";
import ServiceSection from "../component/aboutus/ServiceSection";
import AboutBookCollection from "../component/aboutus/AboutBookCollection";
import BenefitsSection from "../component/aboutus/BenefitsSection";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3">About Us Management</h1>
      <div className="w-full max-w-7xl border border-gray-200 py-6 rounded">
        <AboutHeaderSection />
        <AboutStatsSection/>
        <OurStorySection/>
        <ServiceSection/>
        <AboutBookCollection/>
        <BenefitsSection/>
      </div>
    </div>
  );
};

export default AboutUs;
