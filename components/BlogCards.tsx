import React from 'react';
import Link from 'next/link';

const BlogCard: React.FC<{ 
  title: string; 
  excerpt: string; 
  category: string; 
  readTime: string;
  date: string;
  image?: string;
}> = ({ title, excerpt, category, readTime, date, image }) => {
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
          <Link href={`/posts/${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/posts/${title.toLowerCase().replace(/\s+/g, '-')}`}
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

const BlogCards: React.FC = () => {
  const posts = [
    {
      title: "The Art of Storytelling",
      excerpt: "Discover how to craft compelling narratives that captivate your audience and leave a lasting impact.",
      category: "Writing",
      readTime: "5 min read",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Design Trends 2024",
      excerpt: "Explore the latest design trends that will shape the digital landscape in the coming year.",
      category: "Design",
      readTime: "7 min read",
      date: "Dec 12, 2023",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building Better Communities",
      excerpt: "Learn how to foster engagement and create meaningful connections in online communities.",
      category: "Community",
      readTime: "4 min read",
      date: "Dec 10, 2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Future of Work",
      excerpt: "Examining how remote work and digital transformation are reshaping the modern workplace.",
      category: "Technology",
      readTime: "6 min read",
      date: "Dec 8, 2023",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Creative Photography Tips",
      excerpt: "Master the fundamentals of composition and lighting to take your photography to the next level.",
      category: "Photography",
      readTime: "8 min read",
      date: "Dec 5, 2023",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mindful Living Guide",
      excerpt: "Simple practices and techniques to cultivate mindfulness and find balance in daily life.",
      category: "Lifestyle",
      readTime: "5 min read",
      date: "Dec 3, 2023",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogCards;