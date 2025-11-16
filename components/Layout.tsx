import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  className?: string;
  // Additional SEO props
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Funnel Effect - Professional Writer & Creative Blogger",
  description = "Hello, I'm a content writer who is fascinated by content features, creativity and lifestyle. She helps brands bring the right content to the right people.",
  ogTitle,
  ogDescription,
  ogImage,
  className = "min-h-screen bg-white dark:bg-black",
  // Additional SEO props
  metaTitle,
  metaDescription,
  metaKeywords,
  author = "The Funnel Effect Team",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noIndex = false
}) => {
  const finalTitle = metaTitle || title;
  const finalDescription = metaDescription || description;
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalKeywords = metaKeywords || tags.join(', ');

  return (
    <>
      <Head>
        <title>{finalTitle}</title>
        <meta name="description" content={finalDescription} />
        
        {/* SEO Meta Tags */}
        {finalKeywords && <meta name="keywords" content={finalKeywords} />}
        <meta name="author" content={author} />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={finalOgTitle} />
        <meta property="og:description" content={finalOgDescription} />
        <meta property="og:type" content="website" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:site_name" content="The Funnel Effect" />
        
        {/* Article specific Open Graph */}
        {section && <meta property="article:section" content={section} />}
        {author && <meta property="article:author" content={author} />}
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={finalOgTitle} />
        <meta name="twitter:description" content={finalOgDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${className} pb-16 md:pb-0`}>
        <Header />
        <div className="pt-0 md:pt-0">
          {children}
        </div>
        <Footer socialLinks={[]} />
      </main>
    </>
  );
};

export default Layout;