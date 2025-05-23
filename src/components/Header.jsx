import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center py-6 px-4 sm:px-12 max-w-7xl mx-auto">
        <NavLink to="/" className="logo">
          <img
            src="data:image/png;base64,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"
            alt="Tesla Logo"
            className="h-6"
          />
        </NavLink>

        <button
          className="md:hidden text-2xl focus:outline-none text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent items-center py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300`}
        >
          <li className="my-2 md:my-0 md:ml-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-red-600" : "text-gray-900 hover:text-red-600"
                }`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="my-2 md:my-0 md:ml-10">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-red-600" : "text-gray-900 hover:text-red-600"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li className="my-2 md:my-0 md:ml-10">
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                `font-medium text-sm uppercase tracking-wider relative transition-colors duration-200 ${
                  isActive
                    ? "text-red-600 after:absolute after:w-full after:h-0.5 after:bg-red-600 after:-bottom-1.5 after:left-0"
                    : "text-gray-900 hover:text-red-600"
                }`
              }
            >
              Vehicles
            </NavLink>
          </li>
          <li className="my-2 md:my-0 md:ml-10">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-red-600" : "text-gray-900 hover:text-red-600"
                }`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className="my-2 md:my-0 md:ml-10">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-red-600" : "text-gray-900 hover:text-red-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
