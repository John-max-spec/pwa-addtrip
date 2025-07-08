import React from 'react';
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="logo">trip-diary</div>
      <ul className="nav-links">
        <li><Link to="/todo">Add Trip</Link></li>
        <li><Link to="/trip-list">My Trips</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;
