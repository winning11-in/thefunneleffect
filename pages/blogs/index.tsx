import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getBlogPosts, getCategories } from '@/data/blogPosts';
import { BlogPost } from '@/types';

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, category, readTime, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <article className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 cursor-pointer">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  
  // Show first page
  if (currentPage > 3) {
    pages.push(1);
    if (currentPage > 4) {
      pages.push('...');
    }
  }
  
  // Show pages around current page
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    pages.push(i);
  }
  
  // Show last page
  if (currentPage < totalPages - 2) {
    if (currentPage < totalPages - 3) {
      pages.push('...');
    }
    pages.push(totalPages);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-gray-600 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`px-4 py-2 rounded-full transition-colors ${
            page === currentPage
              ? 'bg-red-500 text-white'
              : page === '...'
              ? 'text-gray-400 cursor-default'
              : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-gray-600 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 6;

  const allPosts = getBlogPosts();
  const categories = ['All', ...getCategories()];
    
  // Get unique categories
  
  // Filter posts based on search and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <Layout 
      title="All Blogs - Funnel Effect"
      description="Explore all our blog posts covering topics from technology and business to lifestyle and creativity."
      ogTitle="All Blogs - Funnel Effect"
      ogDescription="Explore all our blog posts covering topics from technology and business to lifestyle and creativity."
    >
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Blog hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              All Blog Posts
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover insights, tips, and stories across various topics including technology, business, lifestyle, and creativity.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Search */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-white/20 rounded-xl text-white placeholder-white/60 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-white/20 rounded-xl text-white bg-white/10 backdrop-blur-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 appearance-none cursor-pointer min-w-[150px]"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Results count */}
              <p className="text-white/70 text-sm mb-8">
                Showing {filteredPosts.length} of {allPosts.length} articles
              </p>
            </div>
          </div>
          
        
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto px-6 py-16 bg-white dark:bg-black transition-colors duration-300">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
    </Layout>
  );
};

export default BlogsPage;