import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Blogs - The Funnel Effect',
  description: 'Explore our collection of technical articles, tutorials, and insights on software development, programming, and technology trends.',
  openGraph: {
    title: 'All Blogs - The Funnel Effect',
    description: 'Explore our collection of technical articles, tutorials, and insights on software development, programming, and technology trends.',
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}