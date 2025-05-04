import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Student Tech Magazine</h3>
            <p className="text-gray-300">
              Your go-to source for the latest trends, innovations, and insights in the tech world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/magazine" className="text-gray-300 hover:text-white transition-colors">Magazine</Link></li>
              <li><Link to="/tech-news" className="text-gray-300 hover:text-white transition-colors">Tech News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/tech-news" className="text-gray-300 hover:text-white transition-colors">Tech Today</Link></li>
              <li><Link to="/tech-news" className="text-gray-300 hover:text-white transition-colors">Code Chronicles</Link></li>
              <li><Link to="/tech-news" className="text-gray-300 hover:text-white transition-colors">Future World</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>© {currentYear} All rights reserved by Student Tech Magazine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;