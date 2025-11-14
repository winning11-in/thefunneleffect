import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

interface BlogPostPageProps {
  post: BlogPost;
}

const blogPosts: BlogPost[] = [
  {
    slug: "how-to-become-better-with-building-in-1-month",
    title: "How to Become Better With Building in 1 Month",
    excerpt: "Learning to build better products requires consistent practice and the right mindset.",
    content: `
      <p>Learning to build better products requires consistent practice and the right mindset. In this comprehensive guide, we'll explore proven strategies that will accelerate your building skills.</p>
      
      <h2>The Foundation of Good Building</h2>
      <p>Building great products starts with understanding the fundamentals. Whether you're creating software, physical products, or digital experiences, certain principles apply universally.</p>
      
      <h3>1. Start with User Research</h3>
      <p>Before you write a single line of code or sketch your first design, understand your users. Conduct interviews, surveys, and observe how people currently solve the problem you're addressing.</p>
      
      <h3>2. Embrace Iterative Development</h3>
      <p>Don't aim for perfection in your first attempt. Build small, test quickly, and iterate based on feedback. This approach allows you to learn faster and build better products.</p>
      
      <h3>3. Focus on Core Features</h3>
      <p>Identify the essential features that solve the primary problem. Resist the temptation to add every possible feature. A simple, well-executed solution often beats a complex one.</p>
      
      <h2>Practical Steps for Improvement</h2>
      <p>Here's a week-by-week breakdown of how to improve your building skills:</p>
      
      <h3>Week 1: Foundation</h3>
      <ul>
        <li>Study successful products in your domain</li>
        <li>Set up your development environment</li>
        <li>Create your first simple project</li>
      </ul>
      
      <h3>Week 2: User-Centered Design</h3>
      <ul>
        <li>Interview 5 potential users</li>
        <li>Create user personas</li>
        <li>Design your user journey</li>
      </ul>
      
      <h3>Week 3: Build and Test</h3>
      <ul>
        <li>Develop a minimum viable version</li>
        <li>Get feedback from real users</li>
        <li>Identify areas for improvement</li>
      </ul>
      
      <h3>Week 4: Refine and Scale</h3>
      <ul>
        <li>Implement user feedback</li>
        <li>Optimize performance</li>
        <li>Plan your next iteration</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Learn from others' mistakes to accelerate your progress:</p>
      
      <blockquote>
        <p>"The biggest mistake I made early on was trying to build everything at once. Focus on one core feature and make it exceptional." - Sarah Chen, Product Designer</p>
      </blockquote>
      
      <p>Building better products is a journey, not a destination. With consistent practice and the right approach, you'll see significant improvement in just one month.</p>
    `,
    category: "Building",
    readTime: "5 min read",
    date: "Dec 15, 2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    slug: "most-important-thing-you-need-to-know-about-swim",
    title: "Most Important Thing You Need To Know About Swim",
    excerpt: "Swimming is more than just a sport - it's a life skill that can transform your health and mindset.",
    content: `
      <p>Swimming is more than just a sport - it's a life skill that can transform your health and mindset. Here's what every beginner needs to understand before diving in.</p>
      
      <h2>Why Swimming Matters</h2>
      <p>Swimming is often called the perfect exercise, and for good reason. It's a full-body workout that's gentle on your joints while providing incredible cardiovascular benefits.</p>
      
      <h3>Physical Benefits</h3>
      <ul>
        <li>Low-impact exercise suitable for all ages</li>
        <li>Works all major muscle groups</li>
        <li>Improves cardiovascular health</li>
        <li>Builds endurance and strength</li>
      </ul>
      
      <h3>Mental Benefits</h3>
      <ul>
        <li>Reduces stress and anxiety</li>
        <li>Improves focus and concentration</li>
        <li>Provides meditative qualities</li>
        <li>Boosts confidence and self-esteem</li>
      </ul>
      
      <h2>Getting Started: The Essentials</h2>
      <p>Before you jump into the pool, here are the fundamental things every swimmer should know:</p>
      
      <h3>1. Water Safety First</h3>
      <p>Never swim alone, especially if you're a beginner. Always swim in designated areas with lifeguards present. Learn to float and tread water before attempting any strokes.</p>
      
      <h3>2. Start with Breathing</h3>
      <p>Proper breathing is the foundation of good swimming. Practice breathing exercises on land first, then gradually work on rhythmic breathing in shallow water.</p>
      
      <h3>3. Master the Float</h3>
      <p>Learning to float comfortably is crucial. It builds confidence and serves as a foundation for all swimming strokes. Practice both front and back floating.</p>
      
      <h2>Basic Swimming Techniques</h2>
      
      <h3>The Flutter Kick</h3>
      <p>Keep your legs straight but relaxed, with slight bend at the knee. The movement should come from your hips, not your knees. Practice holding the pool edge and kicking.</p>
      
      <h3>Freestyle Basics</h3>
      <p>Start with the freestyle stroke as it's typically the easiest to learn. Focus on:</p>
      <ul>
        <li>Rotating your body with each stroke</li>
        <li>Reaching forward with each arm movement</li>
        <li>Coordinating breathing with arm strokes</li>
      </ul>
      
      <h2>Common Beginner Mistakes</h2>
      <p>Avoid these pitfalls to accelerate your learning:</p>
      
      <ol>
        <li><strong>Holding your breath:</strong> Many beginners try to hold their breath instead of learning rhythmic breathing.</li>
        <li><strong>Lifting your head too high:</strong> Keep your head in a neutral position to maintain proper body alignment.</li>
        <li><strong>Rushing the learning process:</strong> Take time to master basics before moving to advanced techniques.</li>
      </ol>
      
      <blockquote>
        <p>"Swimming taught me that progress comes from consistency, not perfection. Every lap in the pool is a step forward." - Michael Torres, Swimming Instructor</p>
      </blockquote>
      
      <p>Remember, swimming is a skill that improves with practice. Be patient with yourself, stay consistent, and enjoy the journey of learning this valuable life skill.</p>
    `,
    category: "Swimming",
    readTime: "4 min read",
    date: "Dec 12, 2023",
    image: "https://images.unsplash.com/photo-1503823403563-38a5264cea2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    slug: "the-secrets-to-finding-class-tools-for-your-dress",
    title: "The Secrets To Finding Class Tools For Your Dress",
    excerpt: "Fashion is about expressing your personality through the right accessories.",
    content: `
      <p>Fashion is about expressing your personality through the right accessories. Discover how to find the perfect tools and accessories that complement your style and elevate your wardrobe.</p>
      
      <h2>Understanding Your Personal Style</h2>
      <p>Before investing in any fashion accessories, it's crucial to understand your personal style. Are you classic and timeless, or do you prefer bold and trendy pieces?</p>
      
      <h3>Style Categories</h3>
      <ul>
        <li><strong>Classic:</strong> Timeless pieces that never go out of style</li>
        <li><strong>Trendy:</strong> Current fashion-forward items</li>
        <li><strong>Bohemian:</strong> Free-spirited, artistic pieces</li>
        <li><strong>Minimalist:</strong> Clean lines and simple designs</li>
        <li><strong>Glamorous:</strong> Luxurious and eye-catching items</li>
      </ul>
      
      <h2>Essential Fashion Tools Every Woman Needs</h2>
      
      <h3>1. Quality Handbags</h3>
      <p>Invest in versatile bags that work with multiple outfits. A good rule is to have:</p>
      <ul>
        <li>One structured tote for work</li>
        <li>A versatile crossbody for daily use</li>
        <li>An elegant clutch for special occasions</li>
      </ul>
      
      <h3>2. Statement Jewelry</h3>
      <p>The right jewelry can transform any outfit from ordinary to extraordinary. Focus on:</p>
      <ul>
        <li>Classic pearls for elegance</li>
        <li>Gold or silver basics (choose one metal family)</li>
        <li>One statement piece that reflects your personality</li>
      </ul>
      
      <h3>3. Versatile Scarves</h3>
      <p>Scarves are incredibly versatile accessories that can be worn in countless ways. They add color, texture, and interest to any outfit.</p>
      
      <h2>Shopping Smart: Where to Find Quality Pieces</h2>
      
      <h3>High-End Investment Pieces</h3>
      <p>For items you'll wear frequently, invest in quality. Look for:</p>
      <ul>
        <li>Designer consignment shops</li>
        <li>End-of-season sales at department stores</li>
        <li>Outlet stores of luxury brands</li>
      </ul>
      
      <h3>Budget-Friendly Options</h3>
      <p>For trendy pieces or items you won't wear often:</p>
      <ul>
        <li>Fast fashion retailers</li>
        <li>Online marketplaces</li>
        <li>Thrift stores and vintage shops</li>
      </ul>
      
      <h2>Styling Tips for Maximum Impact</h2>
      
      <h3>The Rule of Three</h3>
      <p>When accessorizing, follow the rule of three: choose three focal points maximum. This could be shoes, bag, and jewelry, or any other combination.</p>
      
      <h3>Color Coordination</h3>
      <p>Ensure your accessories complement your outfit's color palette. When in doubt, stick to neutrals or choose one accent color to repeat throughout your accessories.</p>
      
      <h3>Proportion Matters</h3>
      <p>Balance is key in fashion. If you're wearing bold earrings, keep necklaces simple. If your bag is large and structured, choose delicate jewelry.</p>
      
      <blockquote>
        <p>"Fashion is about dressing according to what's fashionable. Style is more about being yourself." - Oscar de la Renta</p>
      </blockquote>
      
      <h2>Building Your Accessory Collection</h2>
      <p>Start with basics and gradually add unique pieces that reflect your personality. Remember, the best accessories are those that make you feel confident and authentic.</p>
      
      <p>Quality over quantity should be your mantra. It's better to have fewer, well-chosen pieces that you love and wear regularly than a closet full of accessories that don't truly represent your style.</p>
    `,
    category: "Fashion",
    readTime: "6 min read",
    date: "Dec 10, 2023",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  }
];

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Funnel Effect</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <div className="pt-20 pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center text-gray-600 text-sm space-x-4">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="w-full">
            {/* Main Content */}
            <div className="w-full">
              <article className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="blog-content"
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['tips', 'guide', post.category.toLowerCase()].map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Funnel Effect</h4>
                    <p className="text-gray-600 text-sm">
                      Content writer fascinated by creativity, lifestyle, and helping brands connect with their audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  href="/"
                  className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer socialLinks={[]} />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    }
  };
};