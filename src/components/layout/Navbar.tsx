import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold text-xl">
                    <Link to="/">DSWD Counter System</Link>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/login" className="hover:underline">Login</Link>
                    <Link to="/profile" className="hover:underline">Profile</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;