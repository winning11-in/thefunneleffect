import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  User,
} from "lucide-react";
import { BlogPost } from "@/types";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import Layout from "@/components/Layout";
import Head from "next/head";

interface BlogDetailPageProps {
  post: BlogPost | null;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              href="/blogs"
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout
      title={`${post.title} - Funnel Effect`}
      description={post.excerpt}
      ogTitle={post.title}
      ogDescription={post.excerpt}
      ogImage={post.image}
    >
      <Head>
        <meta name="author" content={post.author} />
        <meta name="article:author" content={post.author} />
        <meta name="article:published_time" content={post.date} />
        <meta name="article:section" content={post.category} />
        <meta name="keywords" content={`${post.category}, blog, article, ${post.author}`} />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Blogs
            </Link>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>Article</span>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="relative">
          <div className="container mx-auto px-4 max-w-4xl -mt-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-black p-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <div 
              className="blog-content text-gray-700 dark:text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <div className="bg-gray-50 dark:bg-black py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Enjoyed this article?</h3>
                <p className="text-gray-600 dark:text-gray-400">Share it with your network or subscribe for more insights.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-0.5"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <Link
                  href="/blogs"
                  className="inline-flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getBlogPost(params?.slug as string) || null;

  return {
    props: {
      post,
    },
  };
};

export default BlogDetailPage;
