import React from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import LatestEpisode from '@/components/LatestEpisode';
import BlogSection from '@/components/BlogSection';
import FeaturesSection from '@/components/FeaturesSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { latestEpisode, blogPosts, features, socialLinks } from '@/data';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Funnel Effect - Listen. Learn. Level Up.</title>
        <meta name="description" content="A tech podcast sharing insights, stories, and resources for developers and tech enthusiasts." />
        <meta property="og:title" content="The Funnel Effect - Listen. Learn. Level Up." />
        <meta property="og:description" content="A tech podcast sharing insights, stories, and resources for developers and tech enthusiasts." />
        <meta property="og:url" content="https://staging-podcast.vercel.app" />
        <meta property="og:site_name" content="The Funnel Effect" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Funnel Effect - Listen. Learn. Level Up." />
        <meta name="twitter:description" content="A tech podcast sharing insights, stories, and resources for developers and tech enthusiasts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        <Hero />
        <LatestEpisode episode={latestEpisode} />
        <BlogSection posts={blogPosts} />
        <FeaturesSection features={features} />
        <Newsletter />
        <Footer socialLinks={socialLinks} />
      </main>
    </>
  );
}