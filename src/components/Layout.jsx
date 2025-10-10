import { Header, Footer } from '.';
import { lazy, Suspense } from 'react';

const Sidebar = lazy(() => import('./Sidebar'));

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden bg-transparent transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Suspense fallback={<div className="w-16" />}>
        <Sidebar />
      </Suspense>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 text-textLight dark:text-textDark transition-all duration-300">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
