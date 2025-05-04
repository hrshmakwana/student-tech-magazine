import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { useArticles } from '../context/ArticleContext';

const CategorySection = ({ category, limit = 3 }) => {
  const { getArticlesByCategory } = useArticles();
  const articles = getArticlesByCategory(category.name).slice(0, limit);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-orange-500">{category.name}</h2>
          <Link 
            to={`/tech-news?category=${category.name}`}
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            View All
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8 max-w-3xl">
          {category.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;