import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Best & Modern Technology<br />For your Brain
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Welcome to Student Tech Magazine, your go-to source for the latest trends, innovations, and insights in the tech world. We bring you breaking news, expert opinions, and in-depth articles tailored for students and aspiring tech enthusiasts. Whether you're exploring emerging technologies, learning new coding skills, or staying updated with industry developments, we've got you covered. Our platform is designed to inspire, educate, and keep you ahead in the ever-evolving world of technology. Join our growing community, fuel your passion, and be part of the future of tech!
          </p>
          
          <Link 
            to="/magazine" 
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors hover:bg-orange-600"
          >
            Explore Now!
            <Sparkles className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="lg:w-1/2">
          <img 
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
            alt="Technology concept" 
            className="w-full rounded-lg shadow-xl" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;