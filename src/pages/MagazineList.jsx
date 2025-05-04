import React from 'react';
import MagazineIssueCard from '../components/MagazineIssueCard';
import { mockMagazineIssues } from '../data/mockData';

const MagazineList = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Student Tech Magazine Issues</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of magazine issues featuring the latest in technology, 
            coding practices, and future innovations. Each issue is packed with insightful articles 
            from industry experts and thought leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockMagazineIssues.map(issue => (
            <MagazineIssueCard key={issue.id} issue={issue} />
          ))}
        </div>
        
        <div className="mt-16 bg-orange-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Subscribe to Our Magazine</h2>
              <p className="text-gray-600">
                Get early access to each issue and exclusive content right in your inbox!
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 sm:min-w-[250px]"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineList;