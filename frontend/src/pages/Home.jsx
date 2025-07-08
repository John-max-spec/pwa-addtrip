import React, { useState } from 'react';
import '../styles/Home.css';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">trip-diary</div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="/todo" onClick={() => setMenuOpen(false)}>Add Trip</a></li>
          <li><a href="/trip-list" onClick={() => setMenuOpen(false)}>My Trips</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to Trip Diary 🌍</h1>
        <p>Keep track of all your adventures in one place.</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Trip Diary. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
