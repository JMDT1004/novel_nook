import React from 'react'

export function BookCard({ searchResults }) {
  return (
    <div>
      {searchResults.slice(0, 5).map((book) => (
        <div key={book.id}>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || 'Image not available'}
            alt={`${book.volumeInfo.title} cover`}
          />
          <h3>{book.volumeInfo.title}</h3>
          <p>Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>
          <p>Description: {book.volumeInfo.description || 'No description available'}</p>
        </div>
      ))}
    </div>
  );
}
