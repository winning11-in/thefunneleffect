'use client';

import React from 'react';
import Link from 'next/link';
import { Youtube, Instagram, Twitter, Home, Headphones, BookOpen, Mail } from 'lucide-react';
import { SocialLink } from '@/types';

interface FooterProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  Youtube,
  Instagram,
  Twitter
};

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              The <span className="gradient-text">Funnel Effect</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your go-to podcast for tech insights, developer stories, and industry trends. 
              Join thousands of developers who are leveling up their careers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] || Youtube;
                
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Home className="w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Headphones className="w-4 h-4" />
                  Podcasts
                </a>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  Blogs
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get notified about new episodes and articles.
            </p>
            <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:from-primary-700 hover:to-primary-800 hover:shadow-lg">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The Funnel Effect. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;