import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [randomBooks, setRandomBooks] = useState([]);
  const resultsPerPage = 40

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${resultsPerPage}`);
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchRandomBooks = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=printType=books&maxResults=40');
      const items = response.data.items || [];
      const shuffled = items.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);
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
          placeholder="Enter a book title"
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchResults.map((book) => (
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

      <div>
        <h2>Try These Out</h2>
        {randomBooks.map((book) => (
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
    </div>
  );
}

export default Search;
