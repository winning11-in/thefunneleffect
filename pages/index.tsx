import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogCards from '@/components/BlogCards';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Funnel Effect - Professional Writer & Creative Blogger</title>
        <meta name="description" content="Hello, I'm a content writer who is fascinated by content features, creativity and lifestyle. She helps brands bring the right content to the right people." />
        <meta property="og:title" content="Funnel Effect - Professional Writer & Creative Blogger" />
        <meta property="og:description" content="Hello, I'm a content writer who is fascinated by content features, creativity and lifestyle." />
        <meta property="og:url" content="https://staging-podcast.vercel.app" />
        <meta property="og:site_name" content="Funnel Effect" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Funnel Effect - Professional Writer & Creative Blogger" />
        <meta name="twitter:description" content="Hello, I'm a content writer who is fascinated by content features, creativity and lifestyle." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        
        {/* Main Content with Sidebar */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BlogCards />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
        
        <Footer socialLinks={[]} />
      </main>
    </>
  );
}