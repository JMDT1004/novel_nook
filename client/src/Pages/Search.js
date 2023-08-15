import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookCard } from '../components/Bookcard';
import { Link } from 'react-router-dom'

function Search({ searchResults }) {
  const [randomBooks, setRandomBooks] = useState([]);
  

  // Search random books from Google Books API
  const fetchRandomBooks = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=printType=books&maxResults=40');
      const items = response.data.items || [];
      const shuffled = items.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);
      setRandomBooks(selected);
    } catch (error) {
      console.error('Error fetching random books:', error);
    }
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <div className="container mx-auto p-8">
  <h1 className="text-3xl font-bold mb-6">Search Results</h1>
  <hr className="my-custom-line mb-10"></hr>

  {/* Use BookCard component for search results */}
  {searchResults.length ? <BookCard books={searchResults} /> : ''}

  {!searchResults.length && (
    <div className="mt-8">
      
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {randomBooks.map((book) => (
          <div className="bg-white rounded-lg shadow-md p-4" key={book.id}>
            <Link to={`/book/${book.id}`}>
            <div className="h-48 flex items-center justify-center">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || 'Image not available'}
                  alt={`${book.volumeInfo.title} cover`}
                  className="max-h-full w-auto"
                />
              </div>
            </Link>
            <h3 className="text-lg font-semibold mt-2">{book.volumeInfo.title}</h3>
            <p className="mt-1 text-gray-600 text-center"> 
              Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'} 
            </p>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
  );
}

export default Search;




// <div>
//           <h2>Try These Out</h2>
//           {randomBooks.map((book) => (
//             <div key={book.id}>
//               <Link key={book.id} to={`/book/${book.id}`}>
//                 <img
//                   src={book.volumeInfo.imageLinks?.thumbnail || 'Image not available'}
//                   alt={`${book.volumeInfo.title} cover`}
//                 />
//               </Link>
//               <h3>{book.volumeInfo.title}</h3>
//               <p>Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>
//             </div>
//           ))}
//         </div>