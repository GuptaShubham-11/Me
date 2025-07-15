import { Header, Footer } from '.';
import { lazy, Suspense } from 'react';

const Sidebar = lazy(() => import('./Sidebar'));

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-transparent transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Main content with Sidebar */}
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <Suspense fallback={<div className="w-16" />}>
          <Sidebar />
        </Suspense>

        {/* Page Content */}
        <main className="flex-1 w-full px-4 md:px-6 py-6 text-textLight dark:text-textDark transition-all duration-300">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
