import React from 'react';
import TopNav from './TopNav';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;