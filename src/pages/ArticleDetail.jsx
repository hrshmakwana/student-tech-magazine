import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useArticles } from '../context/ArticleContext';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';

const ArticleDetail = () => {
  const { id } = useParams();
  const { getArticleById, getArticlesByCategory } = useArticles();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const loadArticle = () => {
      const foundArticle = getArticleById(id);
      
      if (foundArticle) {
        setArticle(foundArticle);
        
        // Get related articles from the same category
        const related = getArticlesByCategory(foundArticle.category)
          .filter(a => a.id !== foundArticle.id)
          .slice(0, 3);
        
        setRelatedArticles(related);
      }
      
      setIsLoading(false);
    };
    
    loadArticle();
  }, [id, getArticleById, getArticlesByCategory]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-16 flex justify-center">
        <div className="animate-pulse h-4 bg-gray-200 rounded w-32"></div>
      </div>
    );
  }
  
  if (!article) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/tech-news" 
          className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Articles
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      {/* Article Hero */}
      <div 
        className="h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 h-full flex items-end pb-12 relative z-10">
          <div>
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{article.title}</h1>
            <div className="flex items-center text-white text-sm">
              <div className="flex items-center mr-6">
                <Calendar className="mr-2 h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {article.author}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-orange-500 prose-a:text-orange-500"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <Tag className="text-orange-500 mr-2 h-5 w-5" />
              <span className="text-gray-700 font-medium">Category:</span>
              <Link 
                to={`/tech-news?category=${article.category}`} 
                className="ml-2 text-orange-500 hover:text-orange-600"
              >
                {article.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map(relatedArticle => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;