// src/components/Bookshelf.js
import React from 'react';
import '../App.css';

const Bookshelf = ({ books, removeFromBookshelf }) => (
  <div className="bookshelf">
    {books.length === 0 ? <p>Your bookshelf is empty.</p> : null}
    {books.map((book, index) => (
      <div key={index} className="bookshelf-item">
        <h3>{book.title}</h3>
        <p>Author: {book.author_name?.join(', ')}</p>
        <button onClick={() => removeFromBookshelf(book)}>Remove</button>
      </div>
    ))}
  </div>
);

export default Bookshelf;
