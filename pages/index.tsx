import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BlogCards from "@/components/BlogCards";
import Sidebar from "@/components/Sidebar";
import YouTubePlaylists from "@/components/YouTubePlaylists";

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* YouTube Playlists Section */}
      <YouTubePlaylists />

      {/* Latest Blog Posts Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-black transition-colors duration-300">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay up-to-date with the latest programming tutorials, guides, and
            tech insights
          </p>
        </div>

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
