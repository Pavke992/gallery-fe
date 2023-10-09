import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">GalleryApp</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">All Galleries</Link>
          </li>
          {/* {isLoggedIn ? ( */}
            <>
              <li className="nav-item">
                <Link to="/my-galleries" className="nav-link">My Galleries</Link>
              </li>
              <li className="nav-item">
                <Link to="/create-gallery" className="nav-link">Create New Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">Logout</Link>
              </li>
            </>
          {/* ) : ( */}
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </>
          {/* )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
