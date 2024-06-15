// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => (
  <nav >
    <ul>
      <li><Link to="/">Search Books</Link></li>
      <li><Link to="/bookshelf">My Bookshelf</Link></li>
    </ul>
  </nav>
);

export default Navbar;
