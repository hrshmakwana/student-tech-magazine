import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockArticles } from '../data/mockData';

const ArticleContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load articles on mount
  useEffect(() => {
    const loadArticles = () => {
      // Try to get from localStorage first
      const savedArticles = localStorage.getItem('articles');
      
      if (savedArticles) {
        try {
          setArticles(JSON.parse(savedArticles));
        } catch (e) {
          console.error('Failed to parse saved articles', e);
          setArticles(mockArticles);
          localStorage.setItem('articles', JSON.stringify(mockArticles));
        }
      } else {
        // Use mock data
        setArticles(mockArticles);
        localStorage.setItem('articles', JSON.stringify(mockArticles));
      }
      
      setIsLoading(false);
    };
    
    loadArticles();
  }, []);
  
  // Get featured articles
  const featuredArticles = articles.filter(article => article.featured);
  
  // Get article by ID
  const getArticleById = (id) => {
    return articles.find(article => article.id === id);
  };
  
  // Get articles by category
  const getArticlesByCategory = (category) => {
    return articles.filter(article => article.category === category);
  };
  
  // Add a new article
  const addArticle = (article) => {
    const newArticle = {
      ...article,
      id: Math.random().toString(36).substring(2, 9),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };
    
    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    
    return newArticle;
  };
  
  // Update an existing article
  const updateArticle = (id, updatedFields) => {
    const updatedArticles = articles.map(article => 
      article.id === id ? { ...article, ...updatedFields } : article
    );
    
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
  };
  
  // Delete an article
  const deleteArticle = (id) => {
    const filteredArticles = articles.filter(article => article.id !== id);
    setArticles(filteredArticles);
    localStorage.setItem('articles', JSON.stringify(filteredArticles));
  };
  
  const value = {
    articles,
    featuredArticles,
    getArticleById,
    getArticlesByCategory,
    addArticle,
    updateArticle,
    deleteArticle,
    isLoading
  };
  
  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
};