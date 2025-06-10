import React from 'react';
import Link from 'next/link';
// import { Button } from '@/components/ui/button'; // Example for future use

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto h-14 flex items-center">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            My Awesome Blog
          </Link>
          {/* Future navigation links can go here, e.g., using shadcn NavigationMenu */}
          {/* <div className="ml-auto"> <Button variant="outline">Contact</Button> </div> */}
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        {children}
      </main>
      <footer className="border-t border-border/40">
        <div className="container mx-auto p-4 text-center text-sm text-muted-foreground">
          © ${new Date().getFullYear()} My Awesome Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
