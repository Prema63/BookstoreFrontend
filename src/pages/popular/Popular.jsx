import React from 'react'
import AllBooks from '../../components/popular/AllBooks'
import BookDetailsPage from '../../components/popular/BookDetailpage'
import Everyone_talkingSection from '../../components/popular/Everyone_talking'
import Offers from '../../components/popular/Offers'

const Popular = () => {
  return (
    <div>
        <AllBooks/>
        {/* <BookDetailsPage/> */}
        <Everyone_talkingSection/>
        <Offers/>

    </div>
  )
}

export default Popular