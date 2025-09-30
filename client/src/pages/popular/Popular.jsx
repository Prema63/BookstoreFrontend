import React from 'react'
import AllBooks from '../../components/popular/AllBooks'
import BookDetailsPage from '../../components/popular/BookDetailpage'
import Everyone_talkingSection from '../../components/popular/Everyone_talking'
import Offers from '../../components/popular/Offers'
import PopularAuthorSection from '../../components/popular/PopularAuthor'

const Popular = () => {
  return (
    <div>
        <AllBooks/>
        {/* <BookDetailsPage/> */}
        <Everyone_talkingSection/>
        <Offers/>
        <PopularAuthorSection/>
    </div>
  )
}

export default Popular