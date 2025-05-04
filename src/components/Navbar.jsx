import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-orange-500 text-black py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl hover:text-white transition-colors">
          <h1 className="font-bold">
            Student Tech<br />Magazine
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/magazine">Magazine</NavLink>
          <NavLink to="/tech-news">Tech News</NavLink>
          <NavLink to="/featured">Featured</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to="/admin" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <User size={20} />
              </Link>
              <button 
                onClick={logout}
                className="hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <User size={20} />
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-orange-500 py-4 px-6 absolute w-full z-50 left-0 shadow-md">
          <div className="flex flex-col space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/magazine">Magazine</NavLink>
            <NavLink to="/tech-news">Tech News</NavLink>
            <NavLink to="/featured">Featured</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {user ? (
              <>
                <NavLink to="/admin">Dashboard</NavLink>
                <button 
                  onClick={logout}
                  className="text-left hover:text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

// NavLink component for active styles
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`${
        isActive ? 'font-bold' : 'font-medium'
      } hover:text-white transition-colors`}
    >
      {children}
    </Link>
  );
};

export default Navbar;