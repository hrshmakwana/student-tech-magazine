import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useArticles } from '../context/ArticleContext';

const FeaturedSlider = () => {
  const { featuredArticles } = useArticles();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredArticles.length]);
  
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? featuredArticles.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  if (featuredArticles.length === 0) {
    return null;
  }
  
  const article = featuredArticles[currentIndex];
  
  return (
    <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${article.image})`,
          opacity: 0.3
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <button 
          onClick={goToPrevious}
          className="absolute left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h2>
          
          <p className="text-lg text-gray-200 mb-8">
            {article.summary}
          </p>
          
          <Link 
            to={`/article/${article.id}`}
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-orange-600"
          >
            Read Full Article
          </Link>
        </div>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Slider indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;