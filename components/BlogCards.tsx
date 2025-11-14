import React from 'react';
import Link from 'next/link';

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
          <Link href={`/posts/${slug}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/posts/${slug}`}
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
  const posts = [
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
    }
  ];

  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      
      {showViewAll && limit && posts.length > limit && (
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