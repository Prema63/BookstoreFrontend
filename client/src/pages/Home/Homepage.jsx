import React from 'react';
import Banner from '../../components/Home/Banner';
import Category from '../../components/Home/Category';
import Book from '../../components/Home/Book';
import Benefits from '../../components/Home/Benefits';
import Newsletter from '../../components/Home/Newsletter';
import BestsellersSection from '../../components/Home/BestSeller';
import Advertisement from '../../components/Home/Advertisment';

const Homepage = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <Book/>
        <Advertisement/>
        <BestsellersSection/>
        {/* <Benefits/> */}
        <Newsletter/>
    </div>
  )
}

export default Homepage