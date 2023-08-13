import { useState } from 'react';
import axios from 'axios';


function Landing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
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
        {searchResults.slice(0, 10).map((book) => (
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
export default Landing;