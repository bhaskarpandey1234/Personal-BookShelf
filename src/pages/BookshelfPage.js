// src/pages/BookshelfPage.js
import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';
import '../App.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h2>My Bookshelf</h2>
      <Bookshelf books={bookshelf} removeFromBookshelf={removeFromBookshelf} />
    </div>
  );
};

export default BookshelfPage;
