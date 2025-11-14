import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { blogPosts } from '@/data';
import { BlogPost } from '@/types';

const BlogsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>All Blogs - The Funnel Effect</title>
        <meta name="description" content="Explore our collection of technical articles, tutorials, and insights on software development, programming, and technology trends." />
        <meta property="og:title" content="All Blogs - The Funnel Effect" />
        <meta property="og:description" content="Explore our collection of technical articles, tutorials, and insights on software development, programming, and technology trends." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        {/* Header */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-800/20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tech <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dive deep into technical concepts, industry insights, and practical tutorials 
              written by experts in the field.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 bg-dark-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-dark-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Results count */}
              <p className="text-gray-400 text-sm mb-8">
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-400">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post: BlogPost) => (
                  <article 
                    key={post.id}
                    className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover group"
                  >
                    {/* Category badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-600/20 text-primary-400 mb-4">
                      {post.category}
                    </div>

                    {/* Post title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Post description */}
                    <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Post meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Author and Read more */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-gray-300 text-sm font-medium">{post.author}</span>
                      </div>
                      
                      {/* Read more link */}
                      <Link 
                        href={`/blogs/${post.slug}`}
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
            
            {/* Load more button (for future pagination) */}
            {filteredPosts.length > 0 && filteredPosts.length === blogPosts.length && (
              <div className="text-center mt-12">
                <button className="btn-secondary">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogsPage;