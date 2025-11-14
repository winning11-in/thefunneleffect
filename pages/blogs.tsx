import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, category, readTime, date, image, slug }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 cursor-pointer">
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
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-200 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 space-x-3">
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

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allPosts: BlogPost[] = [
    {
      title: "How to Become Better With Building in 1 Month",
      slug: "how-to-become-better-with-building-in-1-month",
      excerpt: "Learning to build better products requires consistent practice and the right mindset. In this comprehensive guide, we'll explore proven strategies that will accelerate your building skills.",
      category: "Building",
      readTime: "5 min read",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Most Important Thing You Need To Know About Swim",
      slug: "most-important-thing-you-need-to-know-about-swim",
      excerpt: "Swimming is more than just a sport - it's a life skill that can transform your health and mindset. Here's what every beginner needs to understand before diving in.",
      category: "Swimming",
      readTime: "4 min read",
      date: "Dec 12, 2023",
      image: "https://images.unsplash.com/photo-1503823403563-38a5264cea2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Secrets To Finding Class Tools For Your Dress",
      slug: "the-secrets-to-finding-class-tools-for-your-dress",
      excerpt: "Fashion is about expressing your personality through the right accessories. Discover how to find the perfect tools and accessories that complement your style.",
      category: "Fashion",
      readTime: "6 min read",
      date: "Dec 10, 2023",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "5 Easy Ways To Make Your iPhone Faster",
      slug: "5-easy-ways-to-make-your-iphone-faster",
      excerpt: "Is your iPhone running slow? Don't worry - you don't need a new phone. These simple optimization techniques will breathe new life into your device and improve performance.",
      category: "Technology",
      readTime: "7 min read",
      date: "Dec 8, 2023",
      image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Morning Beauty Routine for a Natural Glow",
      slug: "morning-beauty-routine-for-natural-glow",
      excerpt: "Great hair starts with understanding your hair type and choosing the right products. Learn the secrets that professional stylists use to create stunning looks.",
      category: "Beauty",
      readTime: "5 min read",
      date: "Dec 6, 2023",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Scaling Your Business with Smart Digital Marketing",
      slug: "scaling-business-with-smart-digital-marketing",
      excerpt: "Sales success isn't about working harder - it's about working smarter. Discover the minimalist approach to sales that drives maximum results with less effort.",
      category: "Business",
      readTime: "8 min read",
      date: "Dec 4, 2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Productivity Hacks for Effective Remote Work",
      slug: "productivity-hacks-for-effective-remote-work",
      excerpt: "Sometimes the most effective solutions are the simplest ones. This universal method has helped thousands achieve their goals - and it can work for you too.",
      category: "Productivity",
      readTime: "6 min read",
      date: "Dec 2, 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Sales Psychology and Customer Behavior",
      slug: "understanding-sales-psychology-and-customer-behavior",
      excerpt: "Efficiency in sales comes from understanding what truly matters. Learn the counter-intuitive strategies that top performers use to achieve more with focused effort.",
      category: "Sales",
      readTime: "9 min read",
      date: "Nov 30, 2023",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mindfulness Practices for Creative Professionals",
      slug: "mindfulness-practices-for-creative-professionals",
      excerpt: "Mental clarity is essential for productivity and well-being. Explore proven techniques to organize your thoughts and achieve peace of mind in our chaotic world.",
      category: "Mindfulness",
      readTime: "4 min read",
      date: "Nov 28, 2023",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Financial Planning Guide for Millennials",
      slug: "financial-planning-guide-for-millennials",
      excerpt: "Smart financial strategies to secure your future and build wealth in an uncertain economic climate.",
      category: "Finance",
      readTime: "7 min read",
      date: "Nov 26, 2023",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    // Additional posts for pagination demonstration
    {
      title: "Advanced CSS Grid Techniques for Modern Layouts",
      slug: "advanced-css-grid-techniques-for-modern-layouts",
      excerpt: "Master the art of CSS Grid with these advanced techniques that will revolutionize your web design approach and create stunning responsive layouts.",
      category: "Technology",
      readTime: "8 min read",
      date: "Nov 24, 2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Art of Minimalist Interior Design",
      slug: "the-art-of-minimalist-interior-design",
      excerpt: "Discover how to create beautiful, functional spaces with minimalist design principles. Less truly can be more when done right.",
      category: "Design",
      readTime: "6 min read",
      date: "Nov 22, 2023",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthy Meal Prep Ideas for Busy Professionals",
      slug: "healthy-meal-prep-ideas-for-busy-professionals",
      excerpt: "Save time and eat better with these practical meal prep strategies designed for busy schedules. Nutrition doesn't have to be complicated.",
      category: "Health",
      readTime: "5 min read",
      date: "Nov 20, 2023",
      image: "https://images.unsplash.com/photo-1547992927-95be6fcba478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building Your Personal Brand as a Creative",
      slug: "building-your-personal-brand-as-a-creative",
      excerpt: "Learn how to authentically showcase your creative work and build a personal brand that attracts the right opportunities and clients.",
      category: "Business",
      readTime: "7 min read",
      date: "Nov 18, 2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Photography Tips for Capturing Perfect Moments",
      slug: "photography-tips-for-capturing-perfect-moments",
      excerpt: "Whether you're using a smartphone or DSLR, these photography tips will help you capture stunning images that tell compelling stories.",
      category: "Photography",
      readTime: "6 min read",
      date: "Nov 16, 2023",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const currentPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <Head>
        <title>All Blogs - Funnel Effect</title>
        <meta name="description" content="Explore all our blog posts covering topics from technology and business to lifestyle and creativity." />
        <meta property="og:title" content="All Blogs - Funnel Effect" />
        <meta property="og:description" content="Explore all our blog posts covering topics from technology and business to lifestyle and creativity." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <div className="pt-20 pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              All Blog Posts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover insights, tips, and stories across various topics including technology, business, lifestyle, and creativity.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <Footer socialLinks={[]} />
      </main>
    </>
  );
}