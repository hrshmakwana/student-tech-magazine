import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useArticles } from '../context/ArticleContext';
import { PenSquare, Trash2, Plus, Star, BookOpen } from 'lucide-react';

const AdminDashboard = () => {
  const { user, isLoading: userLoading } = useUser();
  const { articles, addArticle, updateArticle, deleteArticle, isLoading: articlesLoading } = useArticles();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Tech Today',
    author: '',
    image: '',
    summary: '',
    content: '',
    featured: false
  });
  const navigate = useNavigate();
  
  // Redirect if not admin
  useEffect(() => {
    if (!userLoading && (!user || !user.isAdmin)) {
      navigate('/login');
    }
  }, [user, userLoading, navigate]);
  
  const handleNewArticle = () => {
    setIsEditing(false);
    setSelectedArticle(null);
    setFormData({
      title: '',
      category: 'Tech Today',
      author: '',
      image: '',
      summary: '',
      content: '',
      featured: false
    });
  };
  
  const handleEditArticle = (article) => {
    setIsEditing(true);
    setSelectedArticle(article);
    setFormData({
      title: article.title,
      category: article.category,
      author: article.author,
      image: article.image,
      summary: article.summary,
      content: article.content,
      featured: article.featured
    });
  };
  
  const handleDeleteArticle = (id) => {
    if (window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
      deleteArticle(id);
      
      if (selectedArticle && selectedArticle.id === id) {
        handleNewArticle();
      }
    }
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing && selectedArticle) {
      updateArticle(selectedArticle.id, formData);
    } else {
      addArticle(formData);
    }
    
    handleNewArticle();
  };
  
  if (userLoading || articlesLoading) {
    return (
      <div className="container mx-auto px-6 py-16 flex justify-center">
        <div className="animate-pulse h-4 bg-gray-200 rounded w-32"></div>
      </div>
    );
  }
  
  // If not admin, this will redirect due to the useEffect above
  if (!user || !user.isAdmin) {
    return null;
  }
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-orange-500 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Articles</h2>
                <button
                  onClick={handleNewArticle}
                  className="inline-flex items-center bg-orange-500 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-orange-600"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  New Article
                </button>
              </div>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {articles.map(article => (
                  <div 
                    key={article.id}
                    className={`p-4 rounded-md cursor-pointer transition-colors ${
                      selectedArticle && selectedArticle.id === article.id
                        ? 'bg-orange-100'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleEditArticle(article)}
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800 mb-1 truncate w-3/4">{article.title}</h3>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditArticle(article);
                          }}
                          className="text-blue-500 hover:text-blue-700"
                          aria-label="Edit article"
                        >
                          <PenSquare className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteArticle(article.id);
                          }}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Delete article"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="inline-block bg-gray-100 px-2 py-1 rounded text-xs mr-2">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                      {article.featured && (
                        <Star className="h-3 w-3 text-yellow-500 ml-2" />
                      )}
                    </div>
                  </div>
                ))}
                
                {articles.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No articles found</p>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-orange-500 mr-2" />
                <h2 className="text-xl font-bold">Stats</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Total Articles</p>
                  <p className="text-2xl font-bold text-gray-800">{articles.length}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Featured</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {articles.filter(a => a.featured).length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Article Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">
                {isEditing ? 'Edit Article' : 'Create New Article'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Tech Today">Tech Today</option>
                      <option value="Code Chronicles">Code Chronicles</option>
                      <option value="Future World">Future World</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="https://..."
                  />
                </div>
                
                <div>
                  <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
                    Summary
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                    Content (HTML)
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-gray-700">
                    Featured Article
                  </label>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleNewArticle}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {isEditing ? 'Update Article' : 'Create Article'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;