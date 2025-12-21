import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 border-b bg-gradient-to-r from-indigo-50 to-blue-50 shadow-md relative">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-indigo-700 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.477 5.253 5.478 4 4 4c-1.379 0-2.5 1.121-2.5 2.5v13C2.5 20.379 3.621 21.5 5 21.5c1.518 0 6.518-1.253 8-1.253m0-13c1.523 0 6.522 1.253 8 1.253 1.379 0 2.5-1.121 2.5-2.5v-13C21.5 3.621 20.379 2.5 19 2.5c-1.518 0-6.518 1.253-8 1.253"
          />
        </svg>
        BookStore
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          Contact
        </Link>
        <Link to="/addBook">
          <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md transition-all duration-200 transform hover:scale-105">
            Add Book
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="2" rx="1" fill="#4F46E5" />
          <rect y="7" width="22" height="2" rx="1" fill="#4F46E5" />
          <rect y="14" width="22" height="2" rx="1" fill="#4F46E5" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 px-6 py-6 sm:hidden animate-fadeIn">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
          <Link to="/addBook" onClick={() => setOpen(false)}>
            <button className="w-full mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md transition-all duration-200">
              Add Book
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
