import React from 'react';
import { useArticles } from '../context/ArticleContext';
import ArticleCard from '../components/ArticleCard';
import { Star } from 'lucide-react';

const Featured = () => {
  const { featuredArticles } = useArticles();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
            <Star className="h-6 w-6 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Featured Articles</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the most insightful, innovative, and impactful 
            articles from Student Tech Magazine. These featured pieces represent the best of 
            what we have to offer.
          </p>
        </div>
        
        {featuredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} size="large" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">
              No featured articles found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;