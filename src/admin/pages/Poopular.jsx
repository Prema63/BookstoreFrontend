import React from "react";
import AllBook from "../component/books/AllBooks";
import PopularAuthorSection from "../component/books/PopularAuthor";
import EveryoneTalkingAboutSection from "../component/books/EveryoneTalkingAboutSection";
import OfferSection from "../component/books/OfferSection";

const Poopular = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3">Poplular Books Management</h1>
      <div className="w-full max-w-7xl border border-gray-200 py-6 rounded">
        <AllBook />
        <EveryoneTalkingAboutSection/>
        <OfferSection/>
        <PopularAuthorSection/>
      </div>
    </div>
  );
};

export default Poopular;
