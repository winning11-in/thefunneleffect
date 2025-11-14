import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BlogCards from '@/components/BlogCards';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Main Content with Sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlogCards limit={6} showViewAll={true} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
}