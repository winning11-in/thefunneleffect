import React from 'react';
import Link from 'next/link';
import { getBlogPosts } from '@/data/blogPosts';

const BlogCard: React.FC<{ 
  title: string; 
  excerpt: string; 
  category: string; 
  readTime: string;
  date: string;
  image?: string;
  slug: string;
}> = ({ title, excerpt, category, readTime, date, image, slug }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group border border-gray-50">
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: image ? `url(${image})` : undefined
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">{category}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-200 leading-tight">
          <Link href={`/blogs/${slug}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/blogs/${slug}`}
          className="text-red-500 font-medium text-sm hover:text-red-600 transition-colors inline-flex items-center"
        >
          Continue Reading
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

const BlogCards: React.FC<{ limit?: number; showViewAll?: boolean }> = ({ limit, showViewAll = false }) => {
  const posts = getBlogPosts(limit);
  const allPostsCount = getBlogPosts().length;

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      
      {showViewAll && limit && allPostsCount > limit && (
        <div className="text-center mt-8">
          <Link 
            href="/blogs"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-0.5 inline-flex items-center"
          >
            View All Blogs
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogCards;