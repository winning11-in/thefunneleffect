export interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  audioUrl: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  slug: string;
  author: string;
  category: string;
  featured?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}