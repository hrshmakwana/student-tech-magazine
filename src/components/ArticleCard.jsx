import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, size = 'medium' }) => {
  const { id, title, category, image, summary, date } = article;
  
  const cardStyles = {
    small: 'max-w-xs',
    medium: 'max-w-sm',
    large: 'max-w-md',
  };
  
  const imageStyles = {
    small: 'h-40',
    medium: 'h-48',
    large: 'h-56',
  };
  
  const titleStyles = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
  };
  
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${cardStyles[size]}`}>
      <Link to={`/article/${id}`}>
        <div className={`${imageStyles[size]} overflow-hidden`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium text-orange-500 bg-orange-100 rounded-full px-2 py-1">{category}</span>
          <span className="text-xs text-gray-500 ml-2">{date}</span>
        </div>
        
        <Link to={`/article/${id}`}>
          <h3 className={`${titleStyles[size]} font-bold mb-2 transition-colors hover:text-orange-500`}>{title}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{summary}</p>
        
        <Link 
          to={`/article/${id}`} 
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-orange-600"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;