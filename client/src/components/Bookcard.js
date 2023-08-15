import React from 'react';
import { NavLink } from 'react-router-dom'

export function BookCard({ books }) {
  return (
    <>
   <div className="grid grid-cols-5 gap-4">
  {books.map((book) => (
    <div key={book.id} className="p-2 border rounded-lg">
      <NavLink key={book.id} to={`/book/${book.id}`} className="block mb-2">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={`${book.volumeInfo.title} cover`}
          className="w-full h-full object-cover"
        />
      </NavLink>

      <h3 className="text-sm font-semibold mb-1">{book.volumeInfo.title}</h3>
      <p className="text-xs text-gray-600">
        Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'}
      </p>

      {/* Uncomment this section if you want to show book descriptions */}
      {/* <p className="text-xs mt-1">
        {book.volumeInfo.description || 'No description available'}
      </p> */}
    </div>
  ))}
</div>


    </>
  );
}