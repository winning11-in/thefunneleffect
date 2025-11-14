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

// Re-export blog functions for consistency
export { blogPosts, getBlogPosts, getBlogPost, getCategories } from './blogPosts';