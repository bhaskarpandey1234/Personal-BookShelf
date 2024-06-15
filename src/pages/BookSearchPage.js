// // // // src/pages/BookSearchPage.js
import React, { useState, useEffect } from 'react';
import { searchBooks } from '../api'; // Assuming you have an API function for searching books
import BookCard from '../components/BookCard'; // Assuming you have a BookCard component
import '../App.css'; // Ensure your CSS file is properly imported

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    if (searchTerm.length > 2) {
      try {
        const data = await searchBooks(searchTerm); // Replace with your actual API call
        setResults(data); // Assuming data is an array of books
      } catch (error) {
        console.error('Error searching books:', error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    if (!bookshelf.some(item => item.key === book.key)) {
      const updatedBookshelf = [...bookshelf, book];
      setBookshelf(updatedBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    }
  };

  const isBookInBookshelf = (book) => {
    return bookshelf.some(b => b.key === book.key); // Adjust based on your book object structure
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
        className="search-box" // Ensure class name matches CSS
      />
      <div className="book-results">
        {results.map((book, index) => (
          <BookCard
            key={book.key} // Assuming each book has a unique key or ID
            book={book}
            addToBookshelf={addToBookshelf}
            isBookInBookshelf={isBookInBookshelf(book)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
