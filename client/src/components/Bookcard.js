import React from 'react';
import { Link } from 'react-router-dom'

export function BookCard({ books }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <Link key={book.id} to={`/book/${book.id}`}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'Image not available'}
              alt={`${book.volumeInfo.title} cover`}
            />
          </Link>

          <h3>{book.volumeInfo.title}</h3>
          <p>Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>

          {/* <p>Description: {book.volumeInfo.description || 'No description available'}</p> */}

        </div>
      ))}
    </div>
  );
}