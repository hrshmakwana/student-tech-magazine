import React from 'react';
import { Link } from 'react-router-dom';

const MagazineIssueCard = ({ issue }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img 
        src={issue.coverImage} 
        alt={issue.title} 
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      
      <div className="p-6">
        <span className="text-sm text-gray-500 block mb-2">{issue.publishDate}</span>
        <h3 className="text-2xl font-bold mb-3 transition-colors hover:text-orange-500">
          {issue.title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {issue.description}
        </p>
        
        <Link 
          to={`/magazine/${issue.id}`} 
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-orange-600"
        >
          View Issue
        </Link>
      </div>
    </div>
  );
};

export default MagazineIssueCard;