import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3">Home</Link>
          <Link to="/login" className="text-gray-300 hover:text-white px-3">Login</Link>
          <Link to="/profile" className="text-gray-300 hover:text-white px-3">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;