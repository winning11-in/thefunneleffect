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
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Funnel Effect - Professional Writer & Creative Blogger",
  description = "Hello, I'm a content writer who is fascinated by content features, creativity and lifestyle. She helps brands bring the right content to the right people.",
  ogTitle,
  ogDescription,
  ogImage,
  className = "min-h-screen bg-white dark:bg-black"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${className} pb-16 md:pb-0`}>
        <Header />
        <div className="pt-14 md:pt-16">
          {children}
        </div>
        <Footer socialLinks={[]} />
      </main>
    </>
  );
};

export default Layout;