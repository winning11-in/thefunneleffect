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
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
            
              <span className="text-white text-2xl font-bold">The Funnel Effect</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
              Your ultimate destination for learning programming, web development, and technology skills. 
              We provide comprehensive tutorials and guides to help you master coding and advance your tech career.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 dark:text-gray-400 text-sm mb-4">
              Get notified about new stories and insights.
            </p>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-gray-700 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Funnel Effect. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;