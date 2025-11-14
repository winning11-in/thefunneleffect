import React from 'react'
import Link from 'next/link'
import { Play, ChevronDown, Headphones, Users, TrendingUp, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>New Episode Every Week</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-gray-900 dark:text-white">
              Listen. Learn.
            </span>
            <span className="block gradient-text">
              Level Up.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">The Funnel Effect</span> - 
            your tech podcast sharing insights, stories, and resources that transform developers into industry leaders.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Headphones className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">10K+ Listeners</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">50+ Episodes</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="font-semibold">100+ Articles</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button className="btn-primary group flex items-center space-x-2 text-lg">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" />
              <span>Start Listening</span>
            </button>
            <Link href="/blogs" className="btn-secondary flex items-center space-x-2 text-lg">
              <BookOpen className="w-5 h-5" />
              <span>Read Blogs</span>
            </Link>
          </div>

          {/* Platforms */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Available on all major platforms
            </p>
            <div className="flex justify-center items-center space-x-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">Y</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  )
}