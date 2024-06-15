// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, addToBookshelf, isBookInBookshelf }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button
        onClick={() => addToBookshelf(book)}
        className={isBookInBookshelf ? 'added' : ''}
        disabled={isBookInBookshelf}
      >
        {isBookInBookshelf ? 'Added' : 'Add to Bookshelf'}
      </button>
    </div>
  );
};

export default BookCard;
