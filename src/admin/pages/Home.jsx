import React from 'react'
import BannerSection from '../component/Home/BannerSection'
import CategorySection from '../component/Home/CategorySection'
import FeaturedBook from '../component/Home/FeaturedBook';

const Home = () => {
  return (
    <div>
        <BannerSection/>
        <CategorySection/>
        <FeaturedBook/>
    </div>
  )
}

export default Home