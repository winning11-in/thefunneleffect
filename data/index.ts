import { Episode, BlogPost, Feature, SocialLink } from '@/types';

export const latestEpisode: Episode = {
  id: "ep-001",
  title: "Building Scalable Systems: Lessons from Tech Giants",
  description: "Dive deep into the architectural decisions that power the world's largest tech companies. Learn about microservices, distributed systems, and the challenges of scaling to millions of users.",
  thumbnail: "/images/episode-001.jpg",
  duration: "45:32",
  publishDate: "2024-11-10",
  audioUrl: "/audio/episode-001.mp3",
  featured: true
};

export const recentEpisodes: Episode[] = [
  {
    id: "ep-002",
    title: "The Future of AI in Software Development",
    description: "Exploring how artificial intelligence is transforming the way we write, test, and deploy code.",
    thumbnail: "/images/episode-002.jpg",
    duration: "38:15",
    publishDate: "2024-11-03",
    audioUrl: "/audio/episode-002.mp3"
  },
  {
    id: "ep-003",
    title: "DevOps Best Practices for Modern Teams",
    description: "A comprehensive guide to implementing effective DevOps practices in your organization.",
    thumbnail: "/images/episode-003.jpg",
    duration: "42:20",
    publishDate: "2024-10-27",
    audioUrl: "/audio/episode-003.mp3"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-001",
    title: "10 Essential VS Code Extensions Every Developer Needs",
    description: "Boost your productivity with these carefully curated VS Code extensions that will transform your coding experience.",
    publishDate: "2024-11-12",
    readTime: "5 min read",
    slug: "essential-vscode-extensions",
    author: "Sarah Chen",
    category: "Tools"
  },
  {
    id: "blog-002",
    title: "Understanding React Server Components",
    description: "A deep dive into React Server Components and how they're changing the way we think about React applications.",
    publishDate: "2024-11-08",
    readTime: "8 min read",
    slug: "react-server-components",
    author: "Michael Rodriguez",
    category: "React"
  },
  {
    id: "blog-003",
    title: "The Complete Guide to TypeScript Generics",
    description: "Master TypeScript generics with practical examples and real-world use cases that will level up your type safety game.",
    publishDate: "2024-11-05",
    readTime: "12 min read",
    slug: "typescript-generics-guide",
    author: "David Kim",
    category: "TypeScript"
  },
  {
    id: "blog-004",
    title: "Building APIs with Next.js 14 App Router",
    description: "Learn how to create robust and scalable APIs using Next.js 14's new App Router and Route Handlers.",
    publishDate: "2024-11-01",
    readTime: "10 min read",
    slug: "nextjs-14-api-routes",
    author: "Emma Thompson",
    category: "Next.js"
  },
  {
    id: "blog-005",
    title: "CSS Grid vs Flexbox: When to Use Which",
    description: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and decision-making guidelines.",
    publishDate: "2024-10-28",
    readTime: "7 min read",
    slug: "css-grid-vs-flexbox",
    author: "Alex Johnson",
    category: "CSS"
  },
  {
    id: "blog-006",
    title: "Database Design Patterns for Modern Applications",
    description: "Explore proven database design patterns and learn when to apply them in your next project.",
    publishDate: "2024-10-25",
    readTime: "15 min read",
    slug: "database-design-patterns",
    author: "Lisa Zhang",
    category: "Database"
  }
];

export const features: Feature[] = [
  {
    id: "podcasts",
    title: "Expert Podcasts",
    description: "Deep-dive conversations with industry leaders, sharing insights and experiences from the trenches of tech.",
    icon: "Headphones"
  },
  {
    id: "articles",
    title: "Technical Articles",
    description: "In-depth articles covering the latest technologies, best practices, and emerging trends in software development.",
    icon: "BookOpen"
  },
  {
    id: "insights",
    title: "Tech Insights",
    description: "Curated insights and analysis on technology trends, career growth, and industry developments.",
    icon: "TrendingUp"
  },
  {
    id: "community",
    title: "Developer Community",
    description: "Connect with like-minded developers, share experiences, and grow together in our vibrant community.",
    icon: "Users"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@thefunneleffect",
    icon: "Youtube"
  },
  {
    name: "Instagram", 
    url: "https://instagram.com/thefunneleffect",
    icon: "Instagram"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/thefunneleffect", 
    icon: "Twitter"
  }
];