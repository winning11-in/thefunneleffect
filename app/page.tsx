import React from 'react';
import Hero from '@/components/Hero';
import LatestEpisode from '@/components/LatestEpisode';
import BlogSection from '@/components/BlogSection';
import FeaturesSection from '@/components/FeaturesSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { latestEpisode, blogPosts, features, socialLinks } from '@/data';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LatestEpisode episode={latestEpisode} />
      <BlogSection posts={blogPosts} />
      <FeaturesSection features={features} />
      <Newsletter />
      <Footer socialLinks={socialLinks} />
    </main>
  );
}