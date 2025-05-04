import React from 'react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedSlider from '../components/FeaturedSlider';
import { categories } from '../data/mockData';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <FeaturedSlider />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-500">
            Explore Our Categories
          </h2>
          
          {categories.map(category => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;