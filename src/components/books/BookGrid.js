import React from 'react'
import BookItem from './BookItem'
import Spinner from '../ui/Spinner'

const BookGrid = ({ items, isLoading, setDescModalOpen }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item, i, descModalOpen) => (
        <BookItem key={item.id} item={item} setDescModalOpen={setDescModalOpen}></BookItem>
      ))}
    </section>
  )
}

export default BookGrid
