import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-lg font-bold">Profile Mapping App</h1>
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/admin" className="hover:underline">Admin Panel</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
