import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookCard } from '../components/Bookcard';
import { Link } from 'react-router-dom'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [randomBooks, setRandomBooks] = useState([]);
  const resultsPerPage = 40;


  // Search books from Google Books API
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${resultsPerPage}`);
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
    <div>
      <h1>Search Books</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Title or Author"
        />
        <button type="submit">Search</button>
      </form>

      {/* Use BookCard component for search results */}
      <BookCard books={searchResults} />

      <div>
        <h2>Try These Out</h2>
        {randomBooks.map((book) => (
          <div key={book.id}>
            <Link key={book.id} to={`/book/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || 'Image not available'}
                alt={`${book.volumeInfo.title} cover`}
              />
            </Link>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
