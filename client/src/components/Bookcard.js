import React from 'react';
import { NavLink } from 'react-router-dom'

export function BookCard({ books }) {
  return (
    <div>
      {/* console.log(books); */}
      {books.map((book) => (
        <div key={book.id}>
          <NavLink key={book.id} to={`/book/${book.id}`}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'Image not available'}
              alt={`${book.volumeInfo.title} cover`}
            />
          </NavLink>

          <h3>{book.volumeInfo.title}</h3>
          <p>Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>

          {/* <p>Description: {book.volumeInfo.description || 'No description available'}</p> */}

        </div>
      ))}
    </div>
  );
}