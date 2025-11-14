'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from 'lucide-react';
import { blogPosts } from '@/data';
import { BlogPost } from '@/types';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Mock blog content - in a real app, this would come from a CMS
const getBlogContent = (post: BlogPost): string[] => {
  return [
    `Welcome to this comprehensive guide on ${post.title.toLowerCase()}. In this article, we'll explore the key concepts, best practices, and practical examples that will help you master this important topic.`,
    
    `## Getting Started

Before we dive deep into the technical details, let's establish a solid foundation. Understanding the fundamentals is crucial for successfully implementing the concepts we'll discuss throughout this article.

### Prerequisites

To get the most out of this article, you should have:
- Basic understanding of programming concepts
- Familiarity with modern development tools
- Some experience with web technologies`,

    `## Core Concepts

The main concepts we'll cover include:

1. **Foundation Principles**: Understanding the underlying theory
2. **Practical Implementation**: Real-world examples and use cases
3. **Best Practices**: Industry-standard approaches
4. **Common Pitfalls**: What to avoid and how to troubleshoot

Let's explore each of these areas in detail.`,

    `## Implementation Guide

Here's a step-by-step approach to implementing these concepts in your projects:

### Step 1: Setup and Configuration
Start by setting up your development environment with the necessary tools and dependencies.

### Step 2: Basic Implementation
Begin with a simple implementation to understand the core mechanics.

### Step 3: Advanced Features
Once you're comfortable with the basics, you can explore more advanced features and optimizations.`,

    `## Best Practices and Tips

Based on extensive experience and community feedback, here are the most important best practices:

- **Performance**: Always consider performance implications
- **Security**: Implement proper security measures
- **Maintainability**: Write clean, readable code
- **Testing**: Implement comprehensive testing strategies
- **Documentation**: Maintain clear documentation`,

    `## Conclusion

We've covered a lot of ground in this article, from basic concepts to advanced implementation strategies. The key takeaways are:

1. Start with a solid understanding of the fundamentals
2. Practice with real-world examples
3. Follow established best practices
4. Continuously learn and adapt to new developments

Remember that mastering any technology takes time and practice. Don't be discouraged if everything doesn't click immediately – keep experimenting and building!`,

    `## Additional Resources

To continue your learning journey, check out these resources:

- Official documentation and guides
- Community forums and discussions
- Open-source projects and examples
- Online courses and tutorials

Happy coding!`
  ];
};

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ params }) => {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const content = getBlogContent(post);

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-primary-800/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          {/* Category badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary-600/20 text-primary-400 mb-6">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Share button */}
          <div className="flex items-center gap-4">
            <button className="btn-secondary flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-br from-dark-800/30 to-dark-700/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 lg:p-12">
              {content.map((paragraph, index) => (
                <div 
                  key={index}
                  className="mb-8 text-gray-300 leading-relaxed"
                  style={{ fontSize: '1.125rem', lineHeight: '1.75' }}
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                                    .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
                                    .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-12 mb-6">$1</h2>')
                                    .replace(/- \*\*(.*?)\*\*: (.*)/g, '<li class="ml-4 mb-2"><strong class="text-primary-400">$1</strong>: $2</li>')
                                    .replace(/^(\d+)\. (.*)/gm, '<div class="ml-4 mb-2 flex"><span class="text-primary-400 font-semibold mr-3">$1.</span><span>$2</span></div>')
                  }}
                />
              ))}
            </div>
          </article>

          {/* Author bio */}
          <div className="mt-12 bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                <p className="text-gray-300 mb-4">
                  Senior developer and technical writer with expertise in modern web technologies. 
                  Passionate about sharing knowledge and helping other developers grow their skills.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">More articles by {post.author.split(' ')[0]}</span>
                  <Link 
                    href="/blogs"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    View all →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`/blogs/${relatedPost.slug}`}
                    className="block bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 card-hover group"
                  >
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-600/20 text-primary-400 mb-3">
                      {relatedPost.category}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {relatedPost.readTime} • {new Date(relatedPost.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          {/* Back to blogs */}
          <div className="mt-12 text-center">
            <Link href="/blogs" className="btn-secondary inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;