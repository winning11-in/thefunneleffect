'use client';

import React from 'react';
import Link from 'next/link';
import { Play, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-800/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-up">
          <span className="block text-white mb-2">Listen.</span>
          <span className="block text-white mb-2">Learn.</span>
          <span className="block gradient-text">Level Up.</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up delay-300">
          Welcome to <span className="font-semibold text-primary-400">The Funnel Effect</span> - 
          your tech podcast sharing insights, stories, and resources that transform developers into industry leaders.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up delay-500">
          <button className="btn-primary flex items-center gap-3 text-lg">
            <Play className="w-6 h-6" fill="currentColor" />
            Start Listening
          </button>
          <Link href="/blogs" className="btn-secondary flex items-center gap-3 text-lg">
            <BookOpen className="w-6 h-6" />
            Read Blogs
          </Link>
        </div>
        
        {/* Stats or additional info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-up delay-700">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Episodes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">10K+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Listeners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">100+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Articles</div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;